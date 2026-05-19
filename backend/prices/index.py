import json
import os
import psycopg2


SCHEMA = os.environ.get('MAIN_DB_SCHEMA', 't_p82186569_male_grooming_landin')
ADMIN_PASSWORD = os.environ.get('ADMIN_PASSWORD', 'natali2021')

CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Password',
}

def get_db():
    return psycopg2.connect(os.environ['DATABASE_URL'])

def handler(event: dict, context) -> dict:
    """Получение и обновление цен на услуги депиляции."""

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': CORS_HEADERS, 'body': ''}

    method = event.get('httpMethod', 'GET')

    # GET — вернуть все цены
    if method == 'GET':
        conn = get_db()
        cur = conn.cursor()
        cur.execute(
            f"SELECT slug, label, price, category, sort_order FROM {SCHEMA}.prices ORDER BY sort_order"
        )
        rows = cur.fetchall()
        cur.close()
        conn.close()

        prices = [
            {'slug': r[0], 'label': r[1], 'price': r[2], 'category': r[3], 'sort_order': r[4]}
            for r in rows
        ]
        return {
            'statusCode': 200,
            'headers': {**CORS_HEADERS, 'Content-Type': 'application/json'},
            'body': json.dumps({'prices': prices}, ensure_ascii=False)
        }

    # POST — обновить цену (требует пароль)
    if method == 'POST':
        headers = event.get('headers', {})
        password = headers.get('X-Admin-Password', '') or headers.get('x-admin-password', '')
        if password != ADMIN_PASSWORD:
            return {
                'statusCode': 401,
                'headers': {**CORS_HEADERS, 'Content-Type': 'application/json'},
                'body': json.dumps({'error': 'Неверный пароль'})
            }

        body = json.loads(event.get('body') or '{}')
        slug = body.get('slug', '').strip()
        price = body.get('price', '').strip()

        if not slug or not price:
            return {
                'statusCode': 400,
                'headers': {**CORS_HEADERS, 'Content-Type': 'application/json'},
                'body': json.dumps({'error': 'Укажите slug и price'})
            }

        conn = get_db()
        cur = conn.cursor()
        cur.execute(
            f"UPDATE {SCHEMA}.prices SET price = %s WHERE slug = %s RETURNING slug",
            (price, slug)
        )
        updated = cur.fetchone()
        conn.commit()
        cur.close()
        conn.close()

        if not updated:
            return {
                'statusCode': 404,
                'headers': {**CORS_HEADERS, 'Content-Type': 'application/json'},
                'body': json.dumps({'error': 'Позиция не найдена'})
            }

        return {
            'statusCode': 200,
            'headers': {**CORS_HEADERS, 'Content-Type': 'application/json'},
            'body': json.dumps({'ok': True, 'slug': slug, 'price': price}, ensure_ascii=False)
        }

    return {
        'statusCode': 405,
        'headers': CORS_HEADERS,
        'body': json.dumps({'error': 'Method not allowed'})
    }
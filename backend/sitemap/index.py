def handler(event: dict, context) -> dict:
    """Отдаёт sitemap.xml для поисковых роботов."""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type'}, 'body': ''}

    today = '2026-05-28'
    urls = [
        ('https://sugarts.ru/', '1.0', 'weekly'),
        ('https://sugarts.ru/zagar/', '0.9', 'weekly'),
        ('https://sugarts.ru/depilyaciya/', '0.9', 'weekly'),
        ('https://sugarts.ru/depilyaciya/ekaterinburg/', '0.8', 'monthly'),
        ('https://sugarts.ru/depilyaciya/voskom/', '0.8', 'monthly'),
        ('https://sugarts.ru/depilyaciya/bikini/', '0.7', 'monthly'),
        ('https://sugarts.ru/depilyaciya/boroda/', '0.7', 'monthly'),
        ('https://sugarts.ru/depilyaciya/nogi-ruki/', '0.7', 'monthly'),
        ('https://sugarts.ru/kontakty/', '0.7', 'monthly'),
        ('https://sugarts.ru/blog/shugaring-vs-vosk/', '0.6', 'monthly'),
    ]

    items = ''
    for loc, priority, changefreq in urls:
        items += f"""  <url>
    <loc>{loc}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>{changefreq}</changefreq>
    <priority>{priority}</priority>
  </url>\n"""

    xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{items}</urlset>"""

    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=86400',
            'Access-Control-Allow-Origin': '*',
        },
        'body': xml,
    }
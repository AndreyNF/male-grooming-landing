import { Card, CardContent } from '@/components/ui/card';

export interface PriceRow {
  label: string;
  price: string;
}

interface PriceTableCardProps {
  title?: string;
  rows: PriceRow[];
}

const PriceTableCard = ({
  title = 'Цены на восковую депиляцию',
  rows,
}: PriceTableCardProps) => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-heading font-bold text-black mb-4">
            {title}
          </h2>
        </div>
        <div className="max-w-xl mx-auto">
          <Card className="bg-white shadow-xl border-l-4 border-l-gold">
            <CardContent className="p-4 sm:p-8">
              <div className="space-y-3 text-steel">
                {rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between items-center border-b border-gray-200 pb-2 gap-4"
                  >
                    <span>{row.label}</span>
                    <span className="font-semibold text-gold shrink-0">{row.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PriceTableCard;

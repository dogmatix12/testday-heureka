
// Data Formaters
const INTLFormaters = {
    FormatCurrency: (price: number, currencySymbol = '' as string): string => {
        if (!price) {
            return '';
        }
        // simulate new Intl.NumberFormat('cs').format()
        const strPrice = Number(price).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        if (!currencySymbol) {
            return strPrice;
        }
        return `${strPrice} ${currencySymbol}`;
    }
};

export { INTLFormaters };
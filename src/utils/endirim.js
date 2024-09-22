function endirim(item) {
    return {
        ...item,
        totalPrice: item.discount > 0 ? (item.price - (item.price * item.discount) / 100) : item.price
    }
}

module.exports = { endirim }
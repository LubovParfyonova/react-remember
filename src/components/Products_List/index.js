function ProductsList (props){
    
    
    const {products} = props;
    const prodItems = products.map((item) => <li key={item.toString()}>{item}</li>);
    return (
        <ul>{prodItems}</ul>
    )
}
export default ProductsList 
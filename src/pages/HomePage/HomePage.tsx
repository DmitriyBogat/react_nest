import { Helmet } from "react-helmet"
import { PageWrapper } from "App.styled"
import { ProductGroup, ProductGroupContainer } from "./styled"
import {dummyProducts}  from "pages/dummyProducts"
import ProductCard from 'blocks/ProductCard'
const HomePage: React.FC = () => {
    return<>
    <Helmet>
        <title>Главная - MArketPlace</title>   
    </Helmet>
    <PageWrapper>
        <ProductGroup>
            <h2>Рекомендуемые товары</h2>
            <ProductGroupContainer>
           
                {dummyProducts.map((product) => {
                    return <ProductCard 
                        {...product} 
                        key={product.id}
                    />
                })}
            </ProductGroupContainer>
            
        </ProductGroup>

    </PageWrapper>
     </>
}
export default HomePage
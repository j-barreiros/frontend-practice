// Image
import mobile from './imgs/mobile.jpg';
import desktop from './imgs/desktop.jpg';

// Style
import StyledProductPagePreview from "./StyledProductPreview";

const IconCart = () => {
    return (
        <svg
            className='icon'
            width="15"
            height="16"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF" />
        </svg>
    )
}

function ProductPreview() {
    return (
        <StyledProductPagePreview desktopImage={desktop} mobileImage={mobile}>
            <section className='product-box'>
                <section className='product-image'></section>
                <section className='product-info'>
                    <h2 className='product-category'>PERFUME</h2>
                    <h1 className='product-name'>Gabrielle Essence Eau De Parfume</h1>
                    <p className='product-about'>A floral, solar and voluptuous interpretation composed by Olivier Polge,
                        Perfumer-Creator for the House of CHANEL.</p>
                    <section className='price-section'>
                        <h3 className='current-price'>$149.99</h3>
                        <h4 className='previous-price'>$169.99</h4>
                    </section>
                    <button className='buyBtn'><IconCart /> Add to Cart</button>
                </section>
            </section>
        </StyledProductPagePreview>
    )
}

export default ProductPreview;
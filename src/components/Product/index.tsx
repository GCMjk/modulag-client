import { InfoProduct } from "./Info"
import { GaleryProduct } from "./Galery"
import { IViewProduct } from '@/interfaces';

export const ViewOfProduct = ({ product }: { product: IViewProduct }) => {
    return(
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Image gallery */}
            <GaleryProduct images={product.images} />

            {/* Product info */}
            <InfoProduct details={product.details}/>
        </div>
    )
}
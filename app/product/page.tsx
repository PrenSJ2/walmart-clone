import fetchProduct from "@/lib/fetchProduct";
import {notFound} from "next/navigation";
import Image from "next/image";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Badge} from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import AddToCart from "@/components/AddToCart";


type Props = {
    searchParams: {
        url: string;
    };
}

async function ProductPage({searchParams: {url}}: Props) {
    const result = await fetchProduct(url);
    const product = result?.content;
    if (!product) return notFound();
    return (
        <div className="p-4 lg:p-10 flex flex-col lg:flex-row">
            <div className="hidden lg:inline space-y-4">
                {product.general.images.map((image, i) => (
                    <Image src={image} alt={product.general.title + " " + i} key={image} width={90} height={90} className="border rounded-sm" />
                ))}
            </div>

            <Carousel
                opts={{loop: true}}
                className="w-3/5 mb-10 lg:mb-0 lg:w-full self-start flex items-center max-w-xl mx-auto lg:mx-20"
            >
                <CarouselContent>
                    {product.general.images.map((image, i) => (
                        <CarouselItem key={image}>
                            <div className="p-1">
                                <div className="flex aspect-square items-center justify-center p-2 relative">
                                    <Image src={image} alt={product.general.title + " " + i} width={400} height={400} />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>


            <div className="flex-1 border rounded-md w-full p-5 space-y-5">
                <h1 className="text-3xl font-bold">{product.general.title}</h1>

            {/*    breadcrumbs*/}
                <div className="space-x-2">
                    {product.breadcrumbs.map((breadcrumb, i) => (
                        <Badge
                            key={breadcrumb.category_name + i}
                            className={breadcrumb.category_name}
                            variant="outline"
                        >
                            {breadcrumb.category_name}
                        </Badge>
                    ))}
                </div>

                {/*description*/}
                <div
                    dangerouslySetInnerHTML={{__html: product.general.description}}
                    className="py-5"
                />

            {/*    rating*/}
                {product.rating?.rating && (
                    <p className="text-yellow-500 text-sm">
                        {product.rating?.rating} ★
                        <span className="text-gray-400 ml-2">({product.rating?.count} reviews)</span>
                    </p>
                )}

                {/*price*/}
                <p className="text-2xl font-bold">
                    {product.price?.currency}
                    {' '}
                    {product.price?.price}
                </p>

            {/*    add to card*/}

                <AddToCart product={product} />

                <hr/>


                <h3 className="font-bold text-xl pt-10">Specifications</h3>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="">Specification</TableHead>
                            <TableHead>Value</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {product.specifications.map((spec, i) => (
                            <TableRow key={spec.key}>
                                <TableCell className="font-bold">{spec.key}</TableCell>
                                <TableCell>{spec.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>


            </div>
        </div>
    )
}

export default ProductPage

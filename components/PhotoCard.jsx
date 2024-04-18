import Image from "next/image"
import Link from "next/link"

const PhotoCard = ({photo}) => {
    return (
        <Link href={`photos/${photo.id}`} className="group">
            <Image src={photo.url} width={700} height={700} alt={photo.title} />
            <div className="title-container">
                <h4 className="title"> {photo.title} </h4>
            </div>
        </Link>
    )
}

export default PhotoCard
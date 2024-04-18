import PhotoDetails from "@/components/PhotoDetails"

export default async function PhotoPage({params: {id, lang}}) {
    return (
       <PhotoDetails id={id} lang={lang} />
    )
}
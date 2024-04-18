import { getDictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";

const PhotoDetails = async ({id, lang}) => {
    const response =  await fetch(`${process.env.BASE_API_URL}/photos/${id}`);
    const photo =  await response.json();
    const dic = await getDictionary(lang);

    return (
        <div className="grid grid-cols-12 gap-4 2xl:gap-10 ">
            <div className="col-span-12 lg:col-span-8 border rounded-xl">
                <Image className="max-w-full h-full max-h-[70vh] mx-auto" src={photo.url} width={800} height={300} alt={photo.tittle} />
            </div>
            <div className="p-6 border rounded-xl col-span-12 lg:col-span-4  ">
                <h2 className="text-lg lg:text-2xl font-bold mb-2">
                    {photo.title}
                </h2>
                <div className="text-xs lg:text-sm text-black/60 mb-6">
                    {photo.tags.map(tag => `#${tag}, `)}
                </div>
                <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">
                <div className="flex justify-between">
                    <span>{dic.views}</span>
                    <span className="font-bold">{photo.views}</span>
                </div>
                <div className="flex justify-between">
                    <span>{dic.share}</span>
                    <span className="font-bold">{photo.share}</span>
                </div>
                <div className="flex justify-between">
                    <span>{dic.uploadedOn}</span>
                    <span className="font-bold">{photo.uploaded}</span>
                </div>
                </div>
                <div className="mt-6">
                <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                    <Image className="size-12 lg:size-14 rounded-full border" src={photo.author.avatar} alt={photo.author.name} width={100} height={100} />
                    <div className="spacy-y-3">
                        <h6 className="lg:text-lg font-bold">{photo.author.name}</h6>
                        <p className="text-black/60 text-xs lg:text-sm">{photo.author.followers} {dic.followers}</p>
                    </div>
                    </div>
                    <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
                    <Image src="/follow.svg" width={50} height={520} className="w-5 h-5" />
                        {dic.follow}
                    </button>
                </div>
                <p className="text-xs lg:text-sm text-black/60">
                    {photo.author.bio}
                </p>
                </div>
                <div className="mt-6">
                <div className="flex items-stretch gap-3">
                    <button
                    className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                    <Image src="/heart.svg" width={50} height={520} className="w-5 h-5" />
                        {photo.likes}
                    </button>
                    <button
                    className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                    <Image src="/save.svg" width={50} height={520} className="w-5 h-5" />
                        {dic.save}
                    </button>
                    <button
                    className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                    <Image src="/share.svg" width={50} height={520} className="w-5 h-5" />
                        {dic.share}
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoDetails
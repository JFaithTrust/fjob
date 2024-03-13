import {Skeleton} from "@/components/ui/skeleton"

export function SkeletonCard() {
    return (
        <div className="flex flex-col gap-y-4 p-10">
            <div className="flex flex-row gap-x-2 items-center">
                <Skeleton className="h-12 w-12 rounded-full"/>
                <div className="flex flex-col">
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]"/>
                        <Skeleton className="h-4 w-[200px]"/>
                    </div>
                </div>
            </div>
            <div className={'flex flex-col gap-y-1'}>
                <div className="flex items-center font-bold">
                    <Skeleton className="h-4 w-[250px]"/>
                </div>
                <div>
                    <Skeleton className="h-4 w-[250px]"/>
                </div>
                <div>
                    <Skeleton className="h-4 w-[200px]"/>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center">
                <div className="flex gap-x-2">
                    <Skeleton className="h-4 px-5 rounded-xl"/>
                    <Skeleton className="h-4 px-5 rounded-xl"/>
                </div>
                <Skeleton className="px-4 py-1.5 rounded-xl"/>
            </div>
        </div>
    )
}

export function SkeletonBox() {
    return (
        <div
            className="flex flex-col items-center justify-center p-4 rounded-xl border-[1px] border-solid border-indigo-200 bg-white text-black hover:text-white hover:bg-darkblue transition-colors">
            <div className="space-y-2">
                <Skeleton className="h-3 w-[110px]"/>
                <Skeleton className="h-3 w-[90px]"/>
            </div>
        </div>
    )
}

export function  SkeletonDetail(){
    return (
        <div className="flex flex-col gap-y-6 bg-white p-12 lg:col-span-2 col-span-1 justify-start rounded-xl">
            <div className="flex flex-row gap-x-6 items-center">
                <Skeleton className="h-[48px] w-[48px]"/>
                <Skeleton className="h-4 w-[200px]"/>
            </div>
            <div className="flex flex-row gap-x-5 items-center">
                <div className="flex flex-col items-center gap-y-0.5">
                    <Skeleton className="h-4 w-[50px]"/>
                    <Skeleton className="h-4 w-[100px]"/>
                </div>
                <div className="bg-lightblue h-fit w-[3px]"/>
                <div className="flex flex-col items-center gap-y-0.5">
                    <Skeleton className="h-4 w-[50px]"/>
                    <Skeleton className="h-4 w-[100px]"/>
                </div>
            </div>
            <div className="flex flex-col pt-3 gap-y-3">
                <Skeleton className="h-4 w-[300px]"/>
                <div className="flex flex-col gap-y-1">
                    <Skeleton className="h-4 w-[100px]"/>
                    <Skeleton className="h-4 w-[150px]"/>
                </div>
                <div className="flex flex-col gap-y-1">
                    <Skeleton className="h-4 w-[100px]"/>
                    <Skeleton className="h-4 w-[150px]"/>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-y-1">
                        <Skeleton className="h-4 w-[100px]"/>
                        <Skeleton className="h-4 w-[100px]"/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <Skeleton className="h-4 w-[100px]"/>
                        <Skeleton className="h-4 w-[100px]"/>
                    </div>
                </div>
                <Skeleton className="h-4 w-[300px]"/>
                <Skeleton className="h-4 w-[200px]"/>
                <Skeleton className="h-4 w-[300px]"/>
                <Skeleton className="h-4 w-[250px]"/>
                <Skeleton className="h-4 w-[200px]"/>
                <Skeleton className="h-4 w-[300px]"/>
                <div className="flex flex-col gap-y-1">
                    <Skeleton className="h-4 w-[100px]"/>
                    <Skeleton className="h-4 w-[200px]"/>
                </div>
                <div className="flex flex-col gap-y-1">
                    <Skeleton className="h-4 w-[100px]"/>
                    <Skeleton className="h-4 w-[150px]"/>
                </div>
            </div>
        </div>
    )
}






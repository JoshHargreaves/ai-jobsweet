export default function GeneratorContainer(props: { generator: any; title: string; subtitle: string; }) {
    return (
        <div className="flex flex-1 w-full flex-col items-center text-center px-4 mt-6 sm:mt-6">
            <section className="py-10 lg:py-6 ">
                <div className="px-4">
                    <div className="w-full mx-auto">
                        <h1 className="sm:text-6xl text-4xl font-bold text-slate-900">
                            {props.title}
                        </h1>
                        <p className="sm:text-lg text-lg text-slate-600">
                            {props.subtitle}
                        </p>
                        {props.generator}
                    </div>
                </div>
            </section>
        </div>
    );
}

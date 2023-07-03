export default function GeneratorContainer(props: { generator: any;}) {
    
    return (
            <div className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-6 sm:mt-6">
              <section className="py-10 lg:py-6 ">
                {props.generator}
              </section>
            </div>
    )

}
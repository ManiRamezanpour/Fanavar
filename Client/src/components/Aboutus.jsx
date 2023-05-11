import { useTranslation } from "react-i18next";
export default function Aboutus() {
  const { t, i18n } = useTranslation();
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 md:overflow-visible md:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg> */}
        <img src="../assets/slide-image-2.jpg" alt="" srcset="" />
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 md:mx-0 md:max-w-none md:grid-cols-2 md:items-start md:gap-y-10">
        <div className="md:col-span-2 md:col-start-1 md:row-start-1 md:mx-auto md:grid md:w-full md:max-w-7xl md:grid-cols-2 md:gap-x-8 md:px-8">
          <div className="md:pr-4">
            <div className="md:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Sound system designs
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                IP speaker and sound system
              </h1>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 md:sticky md:top-4 md:col-start-2 md:row-span-2 md:row-start-1 md:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="slide-image-2.jpg"
            alt=""
          />
        </div>
        <div className="md:col-span-2 md:col-start-1 md:row-start-2 md:mx-auto md:grid md:w-full md:max-w-7xl md:grid-cols-2 md:gap-x-8 md:px-8">
          <div className="md:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 md:max-w-lg">
              <p>{t("AboutUS")}</p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                No server? No problem.
              </h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
                vitae interdum mauris enim, consequat vulputate nibh. Maecenas
                pellentesque id sed tellus mauris, ultrices mauris. Tincidunt
                enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p>
            </div>
          </div>
        </div>
        <button className="">ReadMore</button>
      </div>
    </div>
  );
}

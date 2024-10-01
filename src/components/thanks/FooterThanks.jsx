import { IconFacebook, IconInstagram, IconYoutube } from "src/ui/icons"

export const FooterThanks = () => {
  return (
    <footer className="px-4 py-6 lg:py-5 bg-blue-200 lg:rounded-t-3xl lg:gap-x-20 lg:flex lg:justify-center lg:items-center">
      <p className="hidden lg:flex text-[14px] text-white">© 2021 Procter & Gamble</p>
      <a target="_blank" href="https://www.headandshoulders-la.com/es">
        <button className="w-full max-w-[262px] h-[54px] border-[1px] lg:px-3  border-white rounded-[29px] text-white text-base hover:bg-blue-100 transition-all duration-300 ease-linear">
          Ir a head and shoulders
        </button>
      </a>

      <section>
        <div className="mt-[34px] lg:mt-0">
          <p className="text-white text-[16px] font-bold uppercase">CONÉCTATE CON NOSOTROS</p>
          <div className="flex mt-1 gap-x-4">
            <a target="_blank" href="https://www.facebook.com/headandshoulders/?brand_redir=325507387471151&fref=ts">
              <IconFacebook />
            </a>
            <a target="_blank" href="https://www.instagram.com/headandshouldersla/?hl=es-la">
              <IconInstagram />
            </a>
            <a target="_blank" href="https://www.youtube.com/user/headshouldersla">
              <IconYoutube />
            </a>
          </div>
        </div>

        <p className="lg:hidden text-[14px] text-white mt-6">© 2021 Procter & Gamble</p>
      </section>
    </footer>
  )
}

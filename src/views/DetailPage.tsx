import { useEffect, useState } from "react";

export default function DetailPage() {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % 4);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className=" overflow-hidden">
            <section className="c-media-hero position-relative d-flex align-items-end overflow-hidden">
                <div className="pt-10">
                    <div className="w-screen h-screen z-30 absolute lg:bg-gradient-to-r from-orange-100 from-[20%] via-[80%] via-transparent max-w-[1500px] right-0">
                        <div className=" w-full absolute bottom-0 m-auto">
                                <div className="py-3 px-4">
                                    <div className="flex items-end">
                                        <img src="https://static.filmin.es/images/es/media/48854/11/poster_0_3_210x0.webp" className="mr-6 max-w-32 hidden md:block" />
                                        <div>
                                            <div className="pb-4 md:pl-2 flex">
                                                <div className="w-10 h-10 bg-yellow-950 text-orange-100 items-center flex justify-center text-xl font-bold border-2 border-primary-400">
                                                    8
                                                </div>
                                                    <div className="flex flex-col text-base leading-5 pl-2">
                                                        <span>24323 votos</span>
                                                        <span>Estupenda</span>
                                                    </div>

                                            </div>
                                            <div className="lg:pl-2">
                                                <h1 className="mb-2 text-5xl font-black">Vidas Pasadas</h1>
                                                <div className="mb-4">
                                                    <span>
                                                        <span><a href="/directora/celine-song" className="text-nowrap text-xl font-semibold" >Celine Song </a></span>
                                                    </span>
                                                    -
                                                    <span>
                                                        <span><a href="/catalogo/todo/romantica" className="text-nowrap text-xl font-semibold"> Romántica</a>,</span>
                                                        <span><a href="/catalogo/todo/drama" className="text-nowrap text-xl font-semibold"> Drama</a></span>
                                                    </span>
                                                </div>

                                                <div className="flex flex-col md:flex-row">
                                                    <div className="mr-2 font-semibold">
                                                        <time>2023</time>  <span> · 1h 46min </span>
                                                    </div>
                                                    <div className="flex">
                                                    <div className=" px-2 me-2 mb-2 bg-yellow-950 text-orange-100 text-sm">
                                                        7+
                                                    </div>
                                                    <div className="px-2 me-2 mb-2 bg-primary-400 text-orange-100 text-sm">
                                                        HD
                                                    </div>
                                                    <div className="px-2 me-2 mb-2 bg-primary-400 text-orange-100 text-sm">
                                                        VE
                                                    </div>
                                                    <div className="px-2 me-2 mb-2 bg-primary-400 text-orange-100 text-sm">
                                                        VO
                                                    </div>
                                                    <div className="px-2 me-2 mb-2 bg-primary-400 text-orange-100 text-sm">
                                                        VOSE
                                                    </div>
                                                    <div className="px-2 me-2 mb-2 bg-primary-400 text-orange-100 text-sm">
                                                        VOSC
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <div className=" md:max-w-3xl mb-6">
                                            Con dos nominaciones a los Óscar, es el fenómeno que ha cautivado al público. Una historia de separaciones, reencuentros y amores que jamás debieron ser interrumpidos.
                                        </div>
                                        <div className="flex justify-between flex-col md:flex-row">
                                            <div className="flex flex-col md:flex-row gap-2 ">

                                                <button type="button" className="h-14  text-orange-100 text-xl font-bold uppercase px-6 bg-yellow-950">
                                                    Suscríbete
                                                </button>
                                                <button type="button" className="h-14  min-w-44 text-orange-100 text-xl font-bold uppercase px-6 bg-yellow-950">
                                                    Ver tráiler
                                                </button>

                                            </div>
                                            <div className="flex justify-center gap-2 h-14 ">
                                                <button type="button" className="h-full text-sm md:text-xl font-bold uppercase px-2 sm:px-6 text-yellow-950 bg-orange-100 bg-opacity-35">
                                                    Guardar
                                                </button>
                                                <button type="button" className="h-full text-sm md:text-xl font-bold uppercase px-2 sm:px-6 text-yellow-950 bg-orange-100 bg-opacity-35">
                                                    Valorar
                                                </button>
                                                <div>
                                                    <button type="button" className="h-full text-sm md:text-xl font-bold uppercase px-2 sm:px-6 text-yellow-950 bg-orange-100 bg-opacity-35">
                                                        Compartir
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                      
                        </div>
                    </div>
                    <div className=" w-screen h-svh overflow-hidden z-20 relative max-w-[1500px] ml-auto">

                        <img src="https://static.filmin.es/images/es/media/48854/13/still_0_3_1920x1080.webp" className={`w-full  h-auto z-0 absolute top-0 dura left-0 transition-opacity duration-[3000ms] ${index == 0 ? 'opacity-100' : 'opacity-0'}`} />
                        <img src="https://static.filmin.es/images/es/media/48854/11/still_1_3_1920x1080.webp" className={`w-full  h-auto z-0 absolute top-0 left-0 transition-opacity duration-[3000ms] ${index == 1 ? 'opacity-100' : 'opacity-0'}`} />
                        <img src="https://static.filmin.es/images/es/media/48854/9/still_2_3_1920x1080.webp" className={`w-full  h-auto z-0 absolute top-0 left-0 transition-opacity duration-[3000ms] ${index == 2 ? 'opacity-100' : 'opacity-0'}`} />
                        <img src="https://static.filmin.es/images/es/media/48854/7/still_3_3_1920x1080.webp" className={`w-full  h-auto z-0 absolute top-0 left-0 transition-opacity duration-[3000ms] ${index == 3 ? 'opacity-100' : 'opacity-0'}`} />

                    </div>
                </div>

            </section>
            <div>
                <div className="c-horizontal-scroller c-tab-buttons-wrapper border-bottom border-separator">
                    <button type="button" className="c-horizontal-scroller__arrow-container is-disabled">
                        <svg className="o-svg-icon">
                            <use x="0" y="0" href="/assets/apps/img/1d99a5f0395b402b41fbe7cf2970ffdd.svg#chevron-left"></use>
                        </svg>
                    </button>
                    <div className="c-horizontal-scroller__scrollable-area">
                        <div className="c-horizontal-scroller__inner">
                            <div className="c-grid">
                                <button className="c-tab-button c-tab-button--default is-active">Detalles</button>
                                <button className="c-tab-button c-tab-button--default">Similares</button>
                                <button className="c-tab-button c-tab-button--default">Valoraciones</button>
                                <button className="c-tab-button c-tab-button--default">Extras</button>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="c-horizontal-scroller__arrow-container is-disabled">
                        <svg className="o-svg-icon">
                            <use x="0" y="0" href="/assets/apps/img/1d99a5f0395b402b41fbe7cf2970ffdd.svg#chevron-right"></use>
                        </svg>
                    </button>
                </div>
                <div>
                    <div className="c-tab-content is-active">
                        <div className="my-4 c-grid">
                            <div className="c-row">
                                <div className="c-col c-col-7/12@lg c-col--stack">
                                    <div className="p-4 bg-background-alt rounded-xl text-lg@xl">
                                        <div className="pt-2@lg pb-4@lg pr-5@lg pl-3@lg text-left">
                                            <h2 className="mb-4 color-neutral-500 text-xl text-2xl@lg font-weight-medium">Sinopsis</h2>
                                            <div>Con dos nominaciones a los Óscar, "Vidas Pasadas" es el fenómeno que ha cautivado al público. Una historia de separaciones, reencuentros y amores que jamás debieron ser interrumpidos. Nora y Hae Sung, dos amigos de la infancia con una fuerte conexión, se separan cuando la familia de Nora emigra desde Corea del Sur. Dos décadas más tarde se reencontrarán en Nueva York durante una semana que les enfrentará al amor, el destino y a las elecciones que componen una vida.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-background-alt rounded-xl text-lg@xl">
                                        <div className="pt-2@lg pb-4@lg pr-5@lg pl-3@lg text-left">
                                            <h2 className="mb-4 color-neutral-500 text-xl text-2xl@lg font-weight-medium">Premios y nominaciones</h2>

                                            <div className="o-inline-3">
                                                <button type="button" className="c-tag">
                                                    <svg className="o-svg-icon c-tag__icon filmin-award--sm bg-white color-neutral-950">
                                                        <use x="0" y="0" href="/assets/apps/img/1d99a5f0395b402b41fbe7cf2970ffdd.svg#filmin-award-oscars">
                                                        </use>
                                                    </svg>
                                                    <div className="c-tag__text">2 Premios Óscar</div>
                                                </button>
                                                <button type="button" className="c-tag">
                                                    <div className="c-tag__text text-truncate">Otros 22 premios o nominaciones</div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-background-alt rounded-xl text-lg@xl">
                                        <div className="pt-2@lg pb-4@lg pr-5@lg pl-3@lg text-left">
                                            <h2 className="mb-4 color-neutral-500 text-xl text-2xl@lg font-weight-medium">Temas</h2>
                                            <div className="o-inline-3">
                                                <a href="/catalogo/tema/oscar-2024" className="c-tag">
                                                    <div className="c-tag__text">Óscar 2024</div>
                                                </a>
                                                <a href="/catalogo/tema/cine-indie-norteamericano" className="c-tag">
                                                    <div className="c-tag__text">Cine Indie Norteamericano</div>
                                                </a>
                                                <a href="/catalogo/tema/a24" className="c-tag">
                                                    <div className="c-tag__text">A24</div>
                                                </a>
                                                <a href="/catalogo/tema/reencuentros" className="c-tag">
                                                    <div className="c-tag__text">Reencuentros</div>
                                                </a>
                                                <a href="/catalogo/tema/romance" className="c-tag">
                                                    <div className="c-tag__text">Romance</div>
                                                </a>
                                                <a href="/catalogo/tema/romances-contemporaneos" className="c-tag">
                                                    <div className="c-tag__text">Romances contemporáneos</div>
                                                </a>
                                                <a href="/catalogo/tema/relaciones-sentimentales" className="c-tag">
                                                    <div className="c-tag__text">Relaciones Sentimentales</div>
                                                </a>
                                                <a href="/catalogo/tema/primer-amor" className="c-tag">
                                                    <div className="c-tag__text">Primer amor</div>
                                                </a>
                                                <a href="/catalogo/tema/amor-fugaz" className="c-tag">
                                                    <div className="c-tag__text">Amor Fugaz</div>
                                                </a>
                                                <a href="/catalogo/tema/inmigracion" className="c-tag">
                                                    <div className="c-tag__text">Inmigración</div>
                                                </a>
                                                <a href="/catalogo/tema/nueva-york" className="c-tag">
                                                    <div className="c-tag__text">Nueva York</div>
                                                </a>
                                                <a href="/catalogo/tema/directoras" className="c-tag">
                                                    <div className="c-tag__text">Directoras</div>
                                                </a>
                                                <a href="/catalogo/tema/cine-asiatico" className="c-tag">
                                                    <div className="c-tag__text">Cine Asiático</div>
                                                </a>
                                                <a href="/catalogo/tema/opera-prima" className="c-tag">
                                                    <div className="c-tag__text">Ópera Prima</div>
                                                </a>
                                                <a href="/catalogo/tema/favoritas-del-cine-de-autor" className="c-tag">
                                                    <div className="c-tag__text">Favoritas del Cine de Autor</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="c-col c-col-5/12@lg c-col--stack">
                                    <div className="p-4 bg-background-alt rounded-xl text-lg@xl">
                                        <div className="pt-2@lg pb-4@lg pr-5@lg pl-3@lg text-left">
                                            <h2 className="mb-4 color-neutral-500 text-xl text-2xl@lg font-weight-medium">Dirección y reparto</h2>
                                            <dl className="o-stack-3">
                                                <dt className="d-inline color-neutral-500">Dirección:</dt>
                                                <dd className="d-inline">
                                                    <a href="/directora/celine-song" className="text-underline text-nowrap c-link c-link--text">Celine Song</a>
                                                </dd>
                                            </dl>
                                            <dl className="o-stack-3 mb-0">
                                                <dt className="d-inline color-neutral-500">Reparto:</dt>
                                                <dd className="d-inline">
                                                    <a href="/actriz/greta-lee" className="text-underline text-nowrap c-link c-link--text">Greta Lee</a><span>,</span>
                                                    <a href="/actor/teo-yoo" className="text-underline text-nowrap c-link c-link--text">Teo Yoo</a><span>,</span>
                                                    <a href="/actor/john-magaro" className="text-underline text-nowrap c-link c-link--text">John Magaro</a><span>,</span>
                                                    <a href="/actor/kiha-chang" className="text-underline text-nowrap c-link c-link--text">Kiha Chang</a><span>,</span>
                                                    <a href="/actor/moon-seung-ah" className="text-underline text-nowrap c-link c-link--text">Moon Seung-ah</a><span>,</span>
                                                    <a href="/actor/leem-seung-min" className="text-underline text-nowrap c-link c-link--text">Leem Seung-min</a><span>,</span>
                                                    <a href="/actor/jojo-t-gibbs" className="text-underline text-nowrap c-link c-link--text">Jojo T. Gibbs</a><span>,</span>
                                                    <a href="/actor/ji-hye-yoon" className="text-underline text-nowrap c-link c-link--text">Ji Hye Yoon</a><span>,</span>
                                                    <a href="/actor/choi-won-young" className="text-underline text-nowrap c-link c-link--text">Choi Won-young</a><span>,</span>
                                                    <a href="/actor/ahn-min-young" className="text-underline text-nowrap c-link c-link--text">Ahn Min-Young</a><span>,</span>
                                                    <a href="/actor/conrad-schott" className="text-underline text-nowrap c-link c-link--text">Conrad Schott</a><span>,</span>
                                                    <a href="/actor/jane-kim" className="text-underline text-nowrap c-link c-link--text">Jane Kim</a>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-background-alt rounded-xl text-lg@xl">
                                        <div className="pt-2@lg pb-4@lg pr-5@lg pl-3@lg text-left">
                                            <h2 className="mb-4 color-neutral-500 text-xl text-2xl@lg font-weight-medium">Audio y subtítulos</h2>
                                            <dl className="mb-0 d-flex@2xl flex-wrap -mt-3">
                                                <div className="mt-3 mr-5@2xl">
                                                    <dt className="color-neutral-500">Audio:</dt>
                                                    <dd>
                                                        <div>Varios<span className="color-neutral-500">Original</span></div>
                                                        <div>Español</div>
                                                    </dd>
                                                </div>
                                                <div className="mt-3">
                                                    <dt className="color-neutral-500">Subtítulos:</dt>
                                                    <dd>
                                                        <div>Español</div>
                                                        <div>Catalán</div>
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-background-alt rounded-xl text-lg@xl">
                                        <div className="pt-2@lg pb-4@lg pr-5@lg pl-3@lg text-left">
                                            <h2 className="mb-4 color-neutral-500 text-xl text-2xl@lg font-weight-medium">Más información</h2>
                                            <dl className="o-stack-1 mb-0">
                                                <dt className="d-inline color-neutral-500">Título original:</dt>
                                                <dd className="d-inline">Past Lives</dd>
                                            </dl>
                                            <dl className="o-stack-1 mb-0">
                                                <dt className="d-inline color-neutral-500">Géneros:</dt>
                                                <dd className="d-inline">
                                                    <span><a href="/catalogo/todo/romantica" className="text-underline c-link c-link--text">Romántica</a></span>
                                                    <span>
                                                        <span>,</span> <a href="/catalogo/todo/drama" className="text-underline c-link c-link--text">Drama</a>
                                                    </span>
                                                </dd>
                                            </dl>
                                            <dl className="o-stack-1 mb-0">
                                                <dt className="d-inline color-neutral-500">Países:</dt>
                                                <dd className="d-inline">
                                                    <span> <a href="/catalogo/pais/corea-del-sur" className="text-underline c-link c-link--text">Corea del Sur</a>
                                                    </span>
                                                    <span>
                                                        <span>,</span> <a href="/catalogo/pais/estados-unidos" className="text-underline c-link c-link--text">Estados Unidos</a>
                                                    </span>
                                                </dd>
                                            </dl>
                                            <dl className="o-stack-1 mb-0">
                                                <dt className="d-inline color-neutral-500">Estreno en cines:</dt>
                                                <dd className="d-inline">31/10/23</dd>
                                            </dl>
                                            <dl className="o-stack-1 mb-0">
                                                <dt className="color-neutral-500">Recaudación:</dt>
                                                <dd className="d-inline">1.065.964,00 €</dd>
                                                <dt className="color-neutral-500">Espectadores:</dt>
                                                <dd className="d-inline">171044</dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="c-tab-content"></div>
                    <div id="reviews-tabcontent" className="c-tab-content"></div>
                    <div id="extras-tabcontent"></div>
                </div>
            </div>
        </div>
    )
}

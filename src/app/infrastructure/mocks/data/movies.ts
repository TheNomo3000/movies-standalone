import { MovieModel } from 'src/app/domain/models/movie.model';
import { PaginationModel } from 'src/app/domain/models/pagination.model';

export const MOVIES_RESPONSE: PaginationModel<MovieModel[]> = {
  page: 1,
  data: [
    {
      id: 238,
      poster: '/wLXd1Cd0XW7DhXayfC0Ok5ago9r.jpg',
      title: 'El padrino',
      description:
        "Don Vito Corleone, conocido dentro de los círculos del hampa como 'El Padrino', es el patriarca de una de las cinco familias que ejercen el mando de la Cosa Nostra en Nueva York en los años cuarenta. Don Corleone tiene cuatro hijos: una chica, Connie, y tres varones; Sonny, Michael y Fredo. Cuando el Padrino reclina intervenir en el negocio de estupefacientes, empieza una cruenta lucha de violentos episodios entre las distintas familias del crimen organizado.",
      releaseDate: '1972-03-14',
      voteAverage: 8.7,
    },
    {
      id: 278,
      poster: '/dc1fX265fZIIY5Hab8I7CdETyJy.jpg',
      title: 'Cadena perpetua',
      description:
        'Acusado del asesinato de su mujer, Andrew Dufresne, tras ser condenado a cadena perpetua, es enviado a la prisión de Shawshank. Con el paso de los años conseguirá ganarse la confianza del director del centro y el respeto de sus compañeros presidiarios, especialmente de Red, el jefe de la mafia de los sobornos.',
      releaseDate: '1994-09-23',
      voteAverage: 8.7,
    },
    {
      id: 424,
      poster: '/3Ho0pXsnMxpGJWqdOi0KDNdaTkT.jpg',
      title: 'La lista de Schindler',
      description:
        'Oskar Schindler, un hombre de enorme astucia y talento para las relaciones públicas, organiza un ambicioso plan para ganarse la simpatía de los nazis. Después de la invasión de Polonia por los alemanes, consigue, gracias a sus relaciones con los nazis, la propiedad de una fábrica de Cracovia. Allí emplea a cientos de operarios judíos, cuya explotación le hace prosperar rápidamente. Su gerente, también judío, es el verdadero director en la sombra, pues Schindler no tiene el menor conocimiento industrial.',
      releaseDate: '1993-12-15',
      voteAverage: 8.6,
    },
    {
      id: 129,
      poster: '/vlsi5iZcfDChKNGNvRp7Zp3SULH.jpg',
      title: 'El viaje de Chihiro',
      description:
        'Chihiro es una niña de diez años que está mudándose con sus padres a un nuevo hogar. Por el camino, la familia se topa con un enorme edificio rojo en cuyo centro se abre un largo túnel. Al otro lado del pasadizo se dibuja una ciudad fantasma. En el restaurante abandonado de esta ciudad, los padres de Chihiro encuentran una gran variedad de platos deliciosos y deciden quedarse a comer, pero, al probar bocado, se transforman en cerdos. Presa del pánico, Chihiro huye y empieza a desmaterializarse poco a poco. El enigmático Haku le explicará el funcionamiento del universo en el que ha caído. Para salvar a sus padres, la niña tendrá que enfrentarse a la terrible Yubaba, que tiene el aspecto de una arpía diabólica.',
      releaseDate: '2001-07-20',
      voteAverage: 8.5,
    },
    {
      id: 372058,
      poster: '/iaiy3tg9QVkDpObm1IGqmbC9A5C.jpg',
      title: 'Your Name',
      description:
        'Taki y Mitsuha descubren un día que durante el sueño sus cuerpos se intercambian, y comienzan a comunicarse por medio de notas. A medida que consiguen superar torpemente un reto tras otro, se va creando entre los dos un vínculo que poco a poco se convierte en algo más romántico.',
      releaseDate: '2016-08-26',
      voteAverage: 8.5,
    },
    {
      id: 389,
      poster: '/t88XfoxO5cX3f0qaSxWsBS0Lc3.jpg',
      title: 'Doce hombres sin piedad',
      description:
        'Tras escuchar todos los testimonios y valorar las pruebas presentadas, un jurado popular compuesto por doce hombres tiene que decidir, por unanimidad, si absuelve o condena a muerte a un joven acusado de haber matado a su padre. Al principio, once están completamente convencidos de su culpabilidad y se inclinan por la condena, pero el que discrepa empieza a plantear dudas razonables que, poco a poco, van resquebrajando la inicial seguridad de los demás. Alabadísimo debut cinematográfico de Sidney Lumet.',
      releaseDate: '1957-04-10',
      voteAverage: 8.5,
    },
    {
      id: 496243,
      poster: '/4N55tgxDW0RRATyrZHbx0q9HUKv.jpg',
      title: 'Parásitos',
      description:
        'Tanto Gi Taek como su familia están sin trabajo. Cuando su hijo mayor, Gi Woo, empieza a recibir clases particulares en casa de Park, las dos familias, que tienen mucho en común pese a pertenecer a dos mundos totalmente distintos, comienzan una interrelación de resultados imprevisibles.',
      releaseDate: '2019-05-30',
      voteAverage: 8.5,
    },
    {
      id: 497,
      poster: '/aBQiJRxGRrX0mXFMjxyzWYFtEnf.jpg',
      title: 'La milla verde',
      description:
        'En el sur de los Estados Unidos, en plena Depresión, Paul Edgecomb es un vigilante penitenciario a cargo de la Milla Verde, un pasillo que separa las celdas de los reclusos condenados a la silla eléctrica. Esperando su ejecución está John Coffey, un gigantesco negro acusado de asesinar brutalmente a dos hermanas de nueve años. Tras una personalidad ingenua, Coffey esconde un don sobrenatural prodigioso. A medida que transcurre la historia, Paul Edgecomb aprende que los milagros ocurren... incluso en los lugares más insospechados.',
      releaseDate: '1999-12-10',
      voteAverage: 8.5,
    },
    {
      id: 155,
      poster: '/8QDQExnfNFOtabLDKqfDQuHDsIg.jpg',
      title: 'El caballero oscuro',
      description:
        'Batman/Bruce Wayne regresa para continuar su guerra contra el crimen. Con la ayuda del teniente Jim Gordon y del Fiscal del Distrito Harvey Dent, Batman se propone destruir el crimen organizado en la ciudad de Gotham. El triunvirato demuestra su eficacia, pero, de repente, aparece Joker, un nuevo criminal que desencadena el caos y tiene aterrados a los ciudadanos.',
      releaseDate: '2008-07-14',
      voteAverage: 8.5,
    },
    {
      id: 429,
      poster: '/vd9uj5KLlOrJnvNH03exLDlMAE0.jpg',
      title: 'El bueno, el feo y el malo',
      description:
        'Durante la Guerra de Secesión, tres cazadores de recompensas se lanzan a la búsqueda de un tesoro que ninguno de los tres truhanes puede localizar sin la ayuda de los otros dos. Tuco sabe que el tesoro se encuentra en un cementerio, mientras que Joe conoce el nombre inscrito en la tumba que lo esconde. Mientras tanto, Sentenza no duda en matar a mujeres y niños para conseguir su meta. De esta forma, los tres hombres colaboran en apariencia, pero al final intentarán eliminarse mutuamente.',
      releaseDate: '1966-12-23',
      voteAverage: 8.5,
    },
    {
      id: 122,
      poster: '/mWuFbQrXyLk2kMBKF9TUPtDwuPx.jpg',
      title: 'El señor de los anillos: El retorno del rey',
      description:
        'Las fuerzas de Saruman han sido destruidas, y su fortaleza sitiada. Ha llegado el momento de que se decida el destino de la Tierra Media, y por primera vez en mucho tiempo, parece que hay una pequeña esperanza. La atención del señor oscuro Sauron se centra ahora en Gondor, el último reducto de los hombres, y del cual Aragorn tendrá que reclamar el trono para ocupar su puesto de rey. Pero las fuerzas de Sauron ya se preparan para lanzar el último y definitivo ataque contra el reino de Gondor, la batalla que decidirá el destino de todos. Mientras tanto, Frodo y Sam continuan su camino hacia Mordor, a la espera de que Sauron no repare en que dos pequeños Hobbits se acercan cada día más al final de su camino, el Monte del Destino.',
      releaseDate: '2003-12-01',
      voteAverage: 8.5,
    },
    {
      id: 13,
      poster: '/oiqKEhEfxl9knzWXvWecJKN3aj6.jpg',
      title: 'Forrest Gump',
      description:
        'Forrest Gump es un chico con deficiencias mentales no muy profundas y con alguna incapacidad motora que, a pesar de todo, llegará a convertirse, entre otras cosas, en un héroe durante la Guerra del Vietnam. Su persistencia y bondad le llevarán a conseguir una gran fortuna, ser objeto del clamor popular y a codearse con las más altas esferas sociales y políticas del país. Siempre sin olvidar a Jenny, su gran amor desde que era niño.',
      releaseDate: '1994-06-23',
      voteAverage: 8.5,
    },
    {
      id: 11216,
      poster: '/hHwsr3t5n7VVUbPyU8VZswn0jkL.jpg',
      title: 'Cinema Paradiso',
      description:
        'En un pequeño pueblo siciliano durante los años previos a la llegada de la televisión (justo al finalizar la Segunda Guerra Mundial) el joven Toto vivía fascinado por el cine. Toto trata de entablar amistad con Alfredo, el proyeccionista del cine local, una persona muy irritable pero con un gran corazón. Todos estos hechos se presentan en forma de nostálgicos recuerdos de Toto que ha crecido hasta convertirse en un cineasta de éxito, y que revive a su infancia cuando recibe la noticia de que Alfredo ha muerto.',
      releaseDate: '1988-11-17',
      voteAverage: 8.5,
    },
    {
      id: 346,
      poster: '/zr4DkzWIMjaWtj6hlsbN6dnNeTX.jpg',
      title: 'Los siete samuráis',
      description:
        'Una banda de forajidos atemorizan a los habitantes de un pequeño pueblo, saqueándolos periódicamente sin piedad. Para repeler estos ataques, los aldeanos deciden contratar a mercenarios. Finalmente, consiguen los servicios de 7 guerreros, 7 samurais dispuestos a defenderlos a cambio, tan solo, de cobijo y comida.',
      releaseDate: '1954-04-26',
      voteAverage: 8.5,
    },
    {
      id: 637,
      poster: '/a1B39Y1yAo3BE9ULkzkk6hOknBQ.jpg',
      title: 'La vida es bella',
      description:
        'En 1939, a punto de estallar la Segunda Guerra Mundial (1939-1945), el extravagante Guido llega a Arezzo, en la Toscana, con la intención de abrir una librería. Allí conoce a la encantadora Dora y, a pesar de que es la prometida del fascista Rodolfo, se casa con ella y tiene un hijo. Al estallar la guerra, los tres son internados en un campo de exterminio, donde Guido hará lo imposible para hacer creer a su hijo que la terrible situación que están padeciendo es tan sólo un juego.',
      releaseDate: '1997-12-20',
      voteAverage: 8.5,
    },
    {
      id: 14537,
      poster: '/rnYgzVuPaeKnZ85XJlukxmlFcrN.jpg',
      title: 'Harakiri',
      description:
        'Un samurái pide permiso para practicarse el Seppuku (o Harakiri), ceremonia durante la cual se quitará la vida abriéndose el estómago al tiempo que otro samurái lo decapitará. Solicita también poder contar la historia que le ha llevado a tomar tan trágica decisión.',
      releaseDate: '1962-09-15',
      voteAverage: 8.5,
    },
    {
      id: 12477,
      poster: '/ufXfPXN5Yr4tS1oawcXdTr3oXw4.jpg',
      title: 'La tumba de las luciérnagas',
      description:
        'Verano de 1945. La aviación estadounidense somete las ciudades japonesas a continuos ataques aéreos. En uno de ellos, una incursión con bombas incendiarias convierte la ciudad de Kōbe en un infierno humeante, para los dos protagonistas (Seita, de 14 años, y su hermanita Setsuko, de 5). El joven Seita y su pequeña hermana Setsuko son hijos de un oficial de la marina japonesa. Durante la Segunda Guerra Mundial, ambos viven con su madre, pero un día, tras un bombardeo, ellos se retrasan y no consiguen llegar al búnker donde ella los espera.',
      releaseDate: '1988-04-16',
      voteAverage: 8.4,
    },
    {
      id: 324857,
      poster: '/xRMZikjAHNFebD1FLRqgDZeGV4a.jpg',
      title: 'Spider-Man: Un nuevo universo',
      description:
        'En un universo paralelo donde Peter Parker ha muerto, un joven de secundaria llamado Miles Morales es el nuevo Spider-Man. Sin embargo, cuando el líder mafioso Wilson Fisk (a.k.a Kingpin) construye el "Super Colisionador" trae a una versión alternativa de Peter Parker que tratará de enseñarle a Miles como ser un mejor Spider-Man. Pero no será el único Spider Man en entrar a este universo:  4 versiones alternas de Spider-Man aparecerán y buscarán regresar a su universo antes de que toda la realidad se colapse.',
      releaseDate: '2018-12-06',
      voteAverage: 8.4,
    },
    {
      id: 378064,
      poster: '/wIN7wlxyZTxqkstDodMUS9ABel8.jpg',
      title: 'Una voz silenciosa',
      description:
        'La historia gira en torno a Shouko, una chica sorda que, al llegar a su nuevo colegio, es despreciada por sus compañeros y sobretodo por Shouya, un chico que también sufrirá acoso escolar después. Años más tarde, Shouya se siente en la obligación de reencontrarse con Shouko.',
      releaseDate: '2016-09-17',
      voteAverage: 8.4,
    },
    {
      id: 4935,
      poster: '/p8EARnEw8KPZzlZg3vkseYVMczu.jpg',
      title: 'El castillo ambulante',
      description:
        'Sophie es una joven de 18 años que trabaja sin descanso en la tienda de sombreros de la familia. En uno de sus frecuentes paseos conoce al enigmático mago Howl, lo que despierta la ira de la Bruja del Páramo, que odia a Howl con todas sus fuerzas. Cuando Sophie vuelve a la tienda, la Bruja se hace pasar por una clienta para acercarse a ella y lanzarle un hechizo… ¡que convierte a Sophie en una anciana de 90 años! Sophie, que no puede revelar su auténtica identidad, recurre a Howl para buscar una solución a su problema. Para ello se embarca en un viaje fantástico en el castillo ambulante del mago, habitado por personajes de lo más curioso. Sophie necesita ayuda pero quizás sea Howl el que realmente está en apuros.',
      releaseDate: '2004-09-09',
      voteAverage: 8.4,
    },
  ],
  totalPages: 407,
  totalResults: 8123,
};

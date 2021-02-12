import React from 'react';
import { render } from 'react-snapshot';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers/index';
import App from './routes/App';

const initialState = {
  'user': {},
  'reading': {},
  'news': [
    {
      'id': 1,
      'title': 'Liceo Juan Rusque Portal celebró Semana De La Ciencia con excelentes exponentes regionales de la ciencia y la física en conversatorios comunales',
      'date': 'Noviembre 23, 2020',
      'galery': true,
      'contenido': [
        'Para celebrar la semana de la Ciencia, el miércoles pasado,  los docentes del área de Ciencias del Liceo municipal Juan Rusque Portal realizaron un Conversatorio llamado “Experiencias y proyecciones de iniciativas científicas escolares en la comuna de Nogales”, en el cual participaron grandes exponentes del área científica regional y comunal.',
        'Entre los participantes, estuvieron presentes; el Dr. Mauricio Vergara Castro Investigador Laboratorio Cultivo Células Animales, perteneciente a la Escuela Ingeniería Bioquímica de la Pontificia Universidad Católica de Valparaíso, Jorge Alfredo Gonzales Moya Profesor de enseñanza Básica – Profesor de Historia, Magíster en Historia, con Doctorado en ciencias políticas públicas, además de ser el Director de Educación Futuro y Presidente Academia Diálogo, Rodrigo Huilipang Coordinador Ejecutivo Proyecto Asociativo Regional Explora y Sergio Balbontín Coordinador vinculación  con el medio de la Universidad de Valparaíso y profesor universidad de la misma Universidad.',
        'Por nuestra parte comunal, el Liceo Juan Rusque Portal quiso invitar a los siguientes colegios con sus respectivos docentes y estudiantes que participan activamente en el área de la Ciencia. ',
        `- Colegio El Melón:  Profesor Jaime Guerra;  Alumno: Broderick Carrasco
        - Escuela Ulda Aracena: Profesora; María Olga Díaz Olmos, Alumno: Matías Plaza 
        - Escuela La Peña: Profesora; Gabriela Tapia Fernández, Alumna: Melani Collao Santana
        - Liceo Juan Rusque Portal Profesor; Patricio Vásquez Estay, Alumna: Constanza Figueroa Zapata.
        `,
        'La actividad estuvo enmarcada en la semana de la Ciencia y en el Conversatorio se hablaron diferentes temas, en dónde cada estudiante y docente invitado exponían sus avances y proyectos referentes a la Ciencia y lo que realizan para poder lograrla en cada establecimiento educacional, para ello y como moderadora del Conversatorio estaba presente la docente de ciencias Daniela Ibaceta, quién entregaba la palabra al momento de las preguntas por parte de los invitados regionales.',
        'Es importante destacar que el sello del Liceo Municipal Juan Rusque Portal es Científico, por lo que este establecimiento educacional junto a sus docentes forman estudiantes con intereses en múltiples áreas pero se enfocan en la ciencia, tal es el caso que crearon la Academia comunal de Entropía a cargo del docente Patricio Vásquez Estay, en dónde cerca de 11 estudiantes han logrado competir con el proyecto investigación sobre la identificación de las propiedades antibacterianas en plantas de la localidad de Nogales en diferentes Ferias de Ciencia a nivel regional y Nacional.',
      ],
      'miniatura': 'semanaCiencia',
      'imagenesPost': ['semanaCiencia'],
      'videosPost': [],
      'etiquetas': [],
      'audios': [],
    },
    {
      'id': 2,
      'title': 'Alcaldesa Margarita Osorio da el vamos a campaña para mejorar el Hospital Mario Sánchez de La Calera      ',
      'date': 'Noviembre 27, 2020',
      'contenido': [
        'Problemas en el sistema eléctrico e iluminación, deterioro de la pintura exterior e interior, baños de usuarios y funcionarios en malas condiciones, falta de hormigón en el sector de estacionamiento de urgencia y en el patio interior, necesidad de recambio de ventanas, fueron algunas de las falencias que pudo constatar la Alcaldesa de Nogales Margarita Osorio, en una visita realizada ayer al Hospital Doctor Mario Sánchez de la Calera, tras una reunión sostenida con la Directora de ese recinto, Verónica Morales y funcionarios del Servicio de Salud Viña del Mar- Quillota.',
        'La Jefa comunal había realizado un llamado al propio Ministro de Salud para mejorar el recinto asistencial, donde se atienden los vecinos y vecinas de Nogales, El Melón, La Calera e Hijuelas. Y en la reunión, la Alcaldesa explicó a la Directora del hospital que ya tiene conversado la donación de privados para realizar mejoras al centro hospitalario.',
        'La Alcaldesa, junto a personal del servicio de salud, pudo constatar las deficiencias de infraestructura del recinto, tomando nota de cada una de ellas, entre las que también se suman la necesidad de mejoras en la cocina, camarines de los funcionarios, reja exterior y paisajismo.',
        'Margarita Osorio explicó que “en esta visita recorrimos todo el recinto y pude apreciar lo precario del edificio en cuanto a servicios higiénicos, sistema eléctrico, pintura interior y exterior, falta de hormigón en el interior, deficiencias en los baños de los funcionarios, mejoras en la cocina, el mal estado de la morgue...en fin, una gran cantidad de falencias que como Alcaldesa tome nota, y solicitaré el apoyo de la empresa privada y la comunidad para que mejoremos el hospital que atiende a los vecinos de Nogales, El Melón, Hijuelas y La Calera”, dijo.',
        'Además indicó que “no pueden los funcionarios del hospital trabajar en esas precarias condiciones y tampoco los usuarios que no tienen los recursos para acceder a una atención particular. El Hospital ha tenido mejoras por parte del Servicio de Salud, pero falta mucho por hacer”, precisó.',
        'La Alcaldesa indicó que espera el apoyo de la mayor cantidad de empresas para realizar mejoras progresivamente a la infraestructura, reiterando el llamado de toda la comunidad a colaborar con el hospital Doctor Mario Sánchez.',
      ],
      'miniatura': 'hospital',
      'imagenesPost': ['hospital', 'hospital2', 'hospital3', 'hospital4'],
      'videosPost': [],
      'etiquetas': ['Alcaldesa Nogales, Margarita Osorio Pizarro'],
      'audios': ['hospitalAlcaldesa'],
    },
    {
      'id': 3,
      'title': 'Celebración de Navidad Nogales - El Melón 2020',
      'date': 'Diciembre 9, 2020',
      'galery': true,
      'contenido': [
        '',
      ],
      'miniatura': 'navidad',
      'imagenesPost': ['navidad', 'navidad2', 'navidad3', 'navidad4', 'navidad5', 'navidad6', 'navidad7', 'navidad8', 'navidad9', 'navidad10', 'navidad11', 'navidad12', 'navidad13', 'navidad14', 'navidad15', 'navidad16', 'navidad17'],
      'videosPost': [],
      'etiquetas': [],
      'audios': [],
    },
    {
      'id': 4,
      'title': 'Estudiantes de 4° Medio del Colegio El Melón se licencian bajo estrictos protocolos por pandemia',
      'date': 'Diciembre 21, 2020',
      'contenido': [
        'El Colegio El Melón es el segundo de los cuatro establecimientos municipales de la comuna de Nogales en realizar una Licenciatura bajo los estrictos protocolos que se llevan a cabo por la Crisis Sanitaria que estamos viviendo.',
        'Este jueves 17 y viernes 18 de diciembre cerca de las 19:40 se dio inicio a una etapa bastante emotiva para los estudiantes de cuarto año medio del Colegio El Melón, en dónde este año por primera vez se realizó una ceremonia distinta pero no menos emotiva para los estudiantes, familiares y profesor jefe y público en general.',
        'Este año, las ceremonias y todos los ritos de despedidas para los estudiantes fueron modificados para cuidar la salud de todos, por lo mismo, el Colegio El melón quiso realizar dos Ceremonias de Licenciatura de cuarto medio bajo protocolos de seguridad, los que se cumplieron a cabalidad por todos los asistentes a la Licenciatura.',
        'La primera de ella se llevó a cabo el jueves 17, en dónde 14 estudiantes recibieron su licencia de educación media en presencia de la Alcaldesa Margarita Osorio, el Director del Departamento de Educación municipal de Nogales Hernán Alarcón Fernández, el Director el Colegio El Melón Elías Frez, estudiantes, padres, apoderados y docentes.',
        'Como ya es tradición en el Colegio El Melón, se realizó el cambio de Estandarte de los siguientes estudiantes de 4° medio: Betsabé Gutiérrez, Katherine Aguilera, Alex Álvarez e ingresaron en su cambio los siguientes estudiantes: Isca Calderón, Valentina Farías, Felipe Rojas.',
        'Dentro de la primera ceremonia la Alcaldesa Margarita Osorio, el Director del Colegio El Melón Elías Frez, el estudiante Sara Cepeda y el Profesor Jaime Guerra Valencia realizaron los respectivos discursos de despedida y se entregaron los siguientes premios a los estudiantes. ',
        `Premio a la Formación Integral

        - Reconocimiento área Humanista: Alex Álvarez Vásquez 
        
        - Reconocimiento área Matemática: Sara Cepeda Andrade
        
        - Reconocimiento área Artística: Broderick Carrasco Hermosilla
        
        - Reconocimiento área Idioma: Katherine Aguilera Fernández 
        
        - Reconocimiento por su destacado compromiso académico: Samuel Chacana Hidalgo
        
        - Reconocimiento al Esfuerzo y Superación: Harley Aguilera Vilches.
        
        - Reconocimiento a la Trayectoria: Katherine Aguilera Fernández, Alex Álvarez Vásquez, Millaray Arenas Abarca, Paulina Castro Castro, Yuceska Castro Vilches, Samuel Chacana Hidalgo, Betsabé Gutiérrez Jamen, Anain Herrera  Arancibia, Anabel Leiva Vargas, Tihara Maturana Baquedano, Estyvaly Órdenes Espinoza, Andrés Oyanadel Pinilla, Belén Vásquez Barrera.
        
        - Reconocimiento a la Excelencia Académica: Betsabé Gutiérrez Jamen.
        
        - Reconocimiento a la integridad y dedicación académica: Andrés Oyanadel Pinilla.
        
        - Reconocimiento por su destacado compromiso en el área Científica: Catalina Núñez Valencia.
        
        - Reconocimiento al desempeño Académico: Belén Vásquez Barrera, María José Valdivia Ramos.
         
        `,
        'En tanto, el viernes 18 de diciembre, fueron 14 los estudiantes quienes recibieron su licencia del término de su educación media, en presencia de la Secretaria Municipal Viviana García quien iba en representación de la Alcaldesa Margarita Osorio, estuvo también el  Director del Daem Hernán Alarcón, el Director del establecimiento Elías Frez y un apoderado por estudiante, con el fin de cumplir con el aforo máximo permitido por el seremi de Salud. ',
        'El Director del Daem Hernán Alarcón Fernández nos comentó que “fue una ceremonia cargada de emociones, esta es nuestra segunda generación de promoción del colegio El melón. Se tomaron todos los resguardos de seguridad por esta pandemia que estamos viviendo, dividimos al curso en dos grupos. El respeto en la ceremonia, la solemnidad con la cual se realizó en sí, permitieron que la ceremonia en sí no perdiera el realce de una finalización de un proceso importante para los niños”.',
        'La Alcaldesa Margarita Osorio nos mencionó qué “me pareció muy bonito, muy ceremonioso, la túnica que usaron los niños es algo emocionante, muy ordenado, los apoderados, los profesores, el director. Muy bonito todo muy emocionante”.',
        'Finalmente, el Director del Colegio El Melón Elías Frez nos comentó siento “un orgullo por ver como se hace realidad nuestro proyecto educativo en esta segunda generación, porque hemos realizado un tarea enorme junto a los padres y apoderados con el apoyo de nuestra jefatura, que es la Alcaldesa Margarita Osorio y el Director del Daem”.  ',

      ],
      'miniatura': 'licenciaturaMini',
      'imagenesPost': ['licenciatura', 'licenciatura2', 'licenciatura3', 'licenciatura4', 'licenciatura5', 'licenciatura6'],
      'videosPost': [],
      'etiquetas': ['Alcaldesa Nogales, Margarita Osorio Pizarro', 'Director Daem, Hernán Alarcón Fernández'],
      'audios': ['licenciaturaalcaldesa', 'licenciaturadaem'],
    },
    {
      'id': 5,
      'title': 'Celebración de Navidad Nogales - El Melón 2020',
      'date': 'Diciembre 23, 2020',
      'galery': true,
      'contenido': [
        '',
      ],
      'miniatura': 'navidad',
      'imagenesPost': [],
      'videosPost': ['navidad', 'navidad2', 'navidad3', 'navidad4', 'navidad5', 'navidad6'],
      'etiquetas': [],
      'audios': [],
    },
    {
      'id': 6,
      'title': 'Fundación Patroncitos regaló 122 sonricletas a estudiantes de Escuela Rural La Peña',
      'date': 'Diciembre 27, 2020',
      'contenido': [
        'Este sábado 26 de diciembre, la Fundación Patroncitos a cargo de su Fundador  Pancho López junto a sus voluntarios y colaboradores, se trasladaron desde Santiago hasta la Escuela Rural La Peña para realizar la entrega de 122 Sonricletas a todos los estudiantes del establecimiento educacional.',
        'La Fundación tiene por objetivo regalar bicicletas reacondicionadas para los niños y niñas de las zonas rurales de nuestro país y por lo mismo, esta entidad eligió la comuna de Nogales y la Escuela Rural La Peña para realizar gran donación y así entregar sonrisas y conectividad a los niños que viven en los sectores más alejados de la comuna.',
        'En la actividad estuvieron presentes la Alcaldesa Margarita Osorio, el Director del Daem Hernán Alarcón, la Directora de la Escuela La Peña María Bernardita Pereira y Fundador de la Patroncitos Pancho López además de sus ayudantes, padres, apoderados y estudiantes en general.',
        'La entrega se realizó en dos secciones, para así mantener el orden y el distanciamiento social que corresponde por precaución y cumplir con los protocolos que se establecen por la Pandemia. Se comenzó entregando a los estudiantes más pequeños desde pre kínder hasta 4° básico y luego desde 5° a 8° básico.',
        'El Fundador y Presidente Pancho López Amenábar nos señaló que “este es un programa de nuestra Fundación que está orientado a llevar bicicletas recicladas  a niños que están en el mundo rural, no es para niños que están en el mundo urbano, en las ciudades, sino que están en los campos y es un programa que fundamentalmente está orientado a las Escuelas Unidocentes, pero como en la zona no hay escuelas unidocentes, elegimos La Peña como Escuela Rural, que complementa la zona a través de Sonricletas en Nogales”.',
        'Añadió que, “Sonricleta es fruto de la generosidad de muchas personas, son cientos de familias que han entregado sus bicicletas que ya no están ocupando o porque el viejito pascuero trajo bicicletas nuevas y ya era el momento de soltar las antiguas y hay otros cientos de voluntarios que se movieron para llevar las bicicletas a arreglarlas, acopiarlas y dejarlas ojalá como nuevas. La gracia es que los niños puedan sentir que tienen una bicicleta casi casi nueva reciclada. No son bicicletas, son Sonricletas para que puedan pasarla bien, conectarse y gozar como niño”.',
        'Así mismo, la Alcaldesa Margarita Osorio comentó que quiero “agradecerle a nuestros funcionarios municipales que tuvieron que ir a Santiago, a toda la comunidad que aportaron,  a toda esa gente que se puso la manito en el corazón de regalarnos aunque fuera de segunda mano, pero vienen impecables las bicicletas. Y agradecer a toda la Corporación Patroncitos porque ellos fueron los que llegaron al lado mío a ofrecernos ésta ayuda para nuestros niños  de los sectores rurales, en especial acá el Sector de la Peña. Solamente agradecerles y que Dios los bendiga a toda esta gente que está trabajando y que hace propicio para todos estos niños y darle una alegría a todos estos chicos que van a ser felices al estar en bicicleta”.',
      ],
      'miniatura': 'sonricletas',
      'imagenesPost': ['sonricletas', 'sonricletas2', 'sonricletas3', 'sonricletas4', 'sonricletas5', 'sonricletas6', 'sonricletas7', 'sonricletas8', 'sonricletas9'],
      'videosPost': [],
      'etiquetas': ['Alcaldesa Nogales, Margarita Osorio Pizarro'],
      'audios': ['sonricletasAlcaldesa'],
    },
    {
      'id': 7,
      'title': 'Alcaldesa de Nogales en pie de guerra contra las fiestas clandestinas durante toque de queda',
      'date': 'Enero 11, 2021',
      'contenido': [
        'Jefa comunal recibió decenas de llamados el fin de semana con denuncias y no descarta salir ella misma a fiscalizar',
        'Una decena de llamados durante el fin de semana recibió la Alcaldesa de Nogales Margarita Osorio Pizarro, con denuncias de vecinos por ruidos molestos producto de fiestas clandestinas durante el toque de queda, hecho que causó gran malestar de parte de la comunidad de Nogales y El Melón, especialmente de los adultos mayores que prácticamente no han podido dormir los últimos días.',
        'Margarita Osorio indicó que este hecho le causa indignación, ya que por un lado las personas no dejan dormir al resto de los vecinos y lo más grave –dice- es que esta gente pone en riesgo su salud y la de los demás al estar expuestos al contagio de Covid-19.',
        'Y otro hecho preocupante, dijo la Alcaldesa, es que la comunidad se ha quejado que Carabineros no ha acudido a los llamados que denuncian este tipo de fiestas en pleno toque de queda.',
        'Es por ello que Margarita Osorio se reunió esta mañana con el Teniente Raúl Machuca, representante de la Comisario de Carabineros de La Calera, y los Jefes de Tenencia de Carabineros de Nogales y Retén El Melón, ocasión donde les hizo ver el drama que viven muchos vecinos.',
        'En la reunión Carabineros indicó que la institución ha cursado infracciones a varios residentes, pero la Alcaldesa pidió más presencia policial durante las noches, especialmente durante los fines de semana. Y aprovechando la instancia Carabineros reiteró que los números de denuncia son los siguientes:',
        'Tenencia Nogales:    33433116   +56981884975',
        'Reten El Melón:         33433123   +56981884976    +56993224820',
        'Es más, la Jefa Comunal precisó que de no haber presencia de efectivos ella misma saldrá a las calles a fiscalizar estas fiestas clandestinas.',
        'Al finalizar, la alcaldesa indicó que además de los llamados recibió más de veinte audios que ejemplifican el excesivo volumen de la música y desórdenes tanto en Nogales como El Melón, por lo que reiteró el llamado a la comunidad a respetar el toque de queda y evitar aglomeraciones para así reducir los riesgos de contagio de Covid-19.',
      ],
      'miniatura': 'fiestasclandestinas',
      'imagenesPost': ['fiestasclandestinas'],
      'videosPost': [],
      'etiquetas': ['Alcaldesa Nogales, Margarita Osorio Pizarro'],
      'audios': ['alcaldesafiestasclandestinas'],
    },
    {
      'id': 8,
      'title': 'II Feria de Apoyo para los Emprendedores de la comuna en el sector del Polígono en Nogales',
      'date': 'Enero 22, 2021',
      'contenido': [
        'El viernes 22 de enero el Programa Quiero mi Barrio en conjunto con la Municipalidad de Nogales realizaron la II Feria de Emprendedores en la Plaza del sector del Polígono, con el fin de apoyar, incentivar e incrementar las ventas de los Emprendedores para palear un poco la crisis económica que se vive producto de la Pandemia del covid.',
        'La actividad estuvo a cargo del Programa Quiero Mi Barrio que se está ejecutando actualmente en el sector del Polígono en Nogales. Se contó con 14 stands, los cuales cumplen con la normativa vigente para mantener el aforo máximo permitido por las autoridades de Salud y de esta forma se cumplieron todas las medidas sanitarias correspondientes para prevención y el autocuidado de la salud de los vecinos del sector.',
        'En la entrada de la plaza se encontraban funcionarios del Cecosf del Polígono junto al equipo del Programa Quiero mi Barrio que trabajan en conjunto con la municipalidad, realizando la toma de temperatura y haciendo cumplir las medidas a los vecinos, con el fin que todos los que quisieron ingresar al lugar, pudiesen ingresar tranquilos y seguros a la Feria.',
        'Los asistentes pudieron visitar variados puestos de ropa, perfumería, calzado, belleza, artículos de aseo, además de disfrutar de la animación en vivo, clases de zumba en la tarde, funciones de magia para los niños con previo distanciamiento social y la Feria Americana de juegos la cual era sanitizada para su funcionamiento.',
        'La Alcaldesa Margarita Osorio nos mencionó que “ésta feria lo pidieron los vecinos, para entretener a los niños, la gente para para que se sientan un poco más incorporada con todo esto de la pandemia, que ha costado para hacer evento, para que toda la comunidad se puede juntar y también para que ellos puedan vender algo y para poder mantenerse, porque hay mucha gente que está en crisis de cesantía y con esto aunque sea poquito ellos se ayudan”.',
        'Representante Programa Quiero Mi Barrio nos comentó que “también incorporamos esta entretención para los niños y cumpliendo con todas las medidas sanitarias, eso recalcarlo que es lo que más nos pidió la Alcaldesa, que cumpliéramos con el tema del distanciamiento. Los juegos que tenemos acá también son sanitizados y también para ayudar a todos nuestros vecinos que están pasando malos momentos económicos en esta crisis sanitaria del covid-19”.',
      ],
      'miniatura': 'feriapoligono',
      'imagenesPost': ['feriapoligono', 'feriapoligono2', 'feriapoligono3', 'feriapoligono4'],
      'videosPost': [],
      'etiquetas': ['Alcaldesa Nogales, Margarita Osorio Pizarro', 'Valeria Jarpa, Representante Programa Quiero Mi Barrio'],
      'audios': ['alcaldesaferiapoligono', 'valeriaferiapoligono'],
    },

  ],
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

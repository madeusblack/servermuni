import React from 'react';
import '../assets/styles/PasoAPaso.scss';

const PasoAPasoContainer = () => {
  const estadoComuna = 2;
  let toReturn;
  switch (estadoComuna) {
    case 1:
      toReturn = (
        <div className='pasoAPasoContainer'>
          <h1 className='mainTitleCovid_1'>¿Qué está prohibido en mi comuna?</h1>
          <p>
            Las clases presenciales de establecimientos de educación escolar y parvularia.
            <br />
            El traslado a residencia no habitual y a otras regiones.
            <br />
            La realización y participación de reuniones sociales en residencias particulares y en eventos y reuniones de todo tipo, a excepción de funerales.
            <br />
            La atención de público en restaurantes y cafés.
            <br />
            La venta presencial en supermercados de artículos no esenciales: de decoración de hogar, electrodomésticos (incluido televisores y videojuegos), línea blanca, juguetería, vestuario, libros y artículos de librería, y artículos deportivos.
            <br />
            El funcionamiento de pubs, discotecas y lugares análogos.
            <br />
            El funcionamiento de gimnasios y establecimientos deportivos abiertos al público.
            <br />
            La salida de residentes de ELEAM.
            <br />
            Las visitas a Centros SENAME y ELEAMs.
            <br />
            El funcionamiento de Clubes de Adulto Mayores y Centros de día.
          </p>
          <h2 className='mainTitleCovid_1'>¿Qué puedo hacer?</h2>
          <p>
            Debes quedarte en casa, y solo puedes salir a hacer compras o trámites puntuales y esenciales con un permiso individual que puedes obtener en comisariavirtual.cl (dos a la semana y solo de lunes a viernes).
            <br />
            Debes respetar el toque de queda, que implica que no puedes salir entre las 22:00 y las 05:00 horas salvo que tengas un salvoconducto por emergencia médica o el fallecimiento de un familiar directo.
            <br />
            Puedes ir a trabajar si es que trabajas en algún servicio esencial, que no puede ser realizado de forma remota, y tienes un permiso de desplazamiento colectivo o un permiso único colectivo, el que debes presentar junto una copia del contrato de trabajo o un certificado laboral que señale las funciones que desempeñas.
            <br />
            Realizar actividades al aire libre (deporte, paseo) todos los días, pero sólo de 07:00 a 08:30 horas de lunes a viernes y de 06:00 a 09:00 horas los fines de semana y festivos, sin necesidad de permiso. Sólo actividades individuales o con personas de la misma residencia, y sin usar auto o transporte público. En este horario no se puede realizar actividades que requieren permiso.
            <br />
            Si eres mayor de 75 años, los días lunes, jueves y sábado podrás salir a pasear una vez al día, por 60 minutos, entre las 09:00 y las 11:00 horas o entre las 16:00 y las 18:00 horas.
            <br />
            Residentes de Centros SENAME pueden salir a realizar actividades al aire libre en la banda horaria de 07:00 a 08:30 horas, con autorización y supervisión. También se permiten visitas de vínculos significativos.
            <br />
            Cada vez que salgas, con la autorización correspondiente, debes usar mascarilla, mantener la distancia física y recordar medidas como lavado de manos o uso de alcohol gel.
          </p>
          <h2 className='mainTitleCovid_1'>¿Qué puede funcionar en mi comuna?</h2>
          <p>
            Centros de salud y establecimientos de servicio público establecidos.
            <br />
            Comercio con venta presencial sólo de bienes esenciales.
            <br />
            Despacho a domicilio de todo tipo de bienes.
            <br />
            El comercio y cualquier local que atienda público, deberá cerrar a las 20:00 horas.
            <br />
            Todo lo que funcione, debe ser siguiendo los protocolos establecidos.
          </p>
          <div className='covidContainer_1'>
            <h2>Modo Covid Estrategia Sanitaria Permanente</h2>
            <h4>
              Aislamiento obligatorio para: casos confirmados, sospechosos y probables.
              <br />
              Cuarentena obligatoria para contactos estrechos de casos confirmados
              <br />
              Cuarentena obligatoria para quienes ingresan al país.
              <br />
              Uso de mascarilla en lugares cerrados y abiertos urbanos, y transporte público y privado.
              <br />
              Mantener en todo momento un distanciamiento físico mínimo de un metro entre sí, excepción medios de transporte y lugares con aforo regulado específicamente.
              <br />
              Limpieza y desinfección permanente de lugares de atención, espacios de trabajo, herramientas y elementos de trabajo, y lugares de uso común, de acuerdo a protocolo de MINSAL.
              <br />
              Entrega de información sobre aforo máximo, distanciamiento físico y obligaciones y recomendaciones de autocuidado.
            </h4>
          </div>
        </div>
      );
      break;
    case 2:
      toReturn = (
        <div className='pasoAPasoContainer'>
          <h1 className='mainTitleCovid_2'>¿Qué está prohibido en mi comuna?</h1>
          <p>
            Las reuniones en residencias particulares de más de 5 personas y cualquier evento o reunión durante el horario de toque de queda, o los sábados, domingos y festivos.

            <br />
            Las actividades con público con más asistentes que lo permitido o sin cumplir las condiciones requeridas.

            <br />
            La atención de público en restaurantes o cafés en espacios cerrados.

            <br />
            La actividad deportiva en espacios cerrados.

            <br />
            El consumo de alimentos en lugares cerrados de centros comerciales.

            <br />
            El funcionamiento de Clubes de Adultos Mayores y Centros de día de Adultos Mayores.

            <br />
            El funcionamiento de pubs, discotecas y lugares análogos.

            <br />
            El traslado a residencia no habitual y a otras regiones.

            <br />

          </p>
          <h2 className='mainTitleCovid_2'>¿Qué puedo hacer?</h2>
          <p>
            Todos, incluidos los mayores de 75 años, pueden salir de lunes a viernes, pero no ir a lugares en cuarentena.

            <br />
            Debes quedarte en casa los fines de semana y los festivos,días en que solo podrás salir con un permiso individual que puedes obtener en comisariavirtual.cl (1 permiso por fin de semana).

            <br />
            Debes respetar el toque de queda, que implica que no puedes salir entre las 22:00 y las 05:00 horas salvo que tengas un salvoconducto por emergencia médica o funeral.

            <br />
            Puedes ir a trabajar si es que trabajas en un lugar que no esté en cuarentena, a no ser que sea servicio esencial, y tengas un permiso de desplazamiento colectivo o un permiso único colectivo (PUC).

            <br />
            Asistir a actividades presenciales de educación: salas cuna, educación parvularia, básica y media, pero solo de lunes a viernes.

            <br />
            Asistir a restaurantes, sólo en terrazas o espacios al aire libre y en grupos de máximo 4 personas.

            <br />
            Realizar actividad deportiva de lunes a viernes, solo en espacios abiertos, en grupos de máximo 10 personas. Los gimnasios pueden funcionar con las máquinas y actividades en el exterior. Los fines de semana y festivos, sólo en la banda horaria de 05:00 a 10:00 horas, y sin usar auto o transporte público.

            <br />
            Tener reuniones sociales en residencias particulares con máximo 5 personas en total, y solo de lunes a viernes. Intenta no tener reuniones con más de un mismo grupo a la semana.

            <br />
            Participar en eventos o actividades con público: si la actividad es con ubicación fija de los asistentes y sin consumo de alimentos, pueden ser hasta 20 personas en lugares al aire libre y 10 personas en lugares cerrados, sólo de lunes a viernes. Lo anterior incluye oficios religiosos. Si la misma actividad considera consumo de alimentos, sólo pueden ser 10 personas al aire libre. No permitidas en residencias particulares.

            <br />
            Residentes de Centros SENAME pueden salir con autorización y supervisión. También se permiten visitas de vínculos significativos. Los fines de semana pueden salir a realizar actividades al aire libre en la banda horaria de 05:00 a 10:00 horas.
            <br />
            Residentes de ELEAM pueden salir a caminar todos los días por máx. 2 hrs, y recibir visita de 2 personas, 2 veces a la semana.

          </p>
          <h2 className='mainTitleCovid_2'>¿Qué puede funcionar en mi comuna?</h2>
          <p>
            Farmacias, supermercados y otros lugares de abastecimiento de alimentos y productos básicos, centros de salud y establecimientos de servicio público.

            <br />
            Comercio y otras actividades no esenciales que puedan funcionar con trabajadores que vivan en una comuna sin cuarentena.

            <br />
            Actividades presenciales en salas cuna y establecimientos de educación parvularia, básica y media, de lunes a viernes.

            <br />
            Atención de público en restaurantes sólo en espacios abiertos, con 2m. lineales entre mesas (bordes).

            <br />
            Gimnasios o lugares de actividad deportiva, pero sólo con actividades en el exterior o espacios abiertos.
            <br />
            Actividades con público, respetando los aforos máximos y las condiciones de acuerdo al tipo de evento.

            <br />
            Todo lo que funcione, debe ser siguiendo los protocolos establecidos.

          </p>
          <div className='covidContainer_2'>
            <h2>*MODO COVID: Estrategia Sanitaria permanente</h2>
            <h4>
              SIEMPRE debes respetar las medidas que dicte la autoridad como cordones y aduanas sanitarias y, si eres un caso confirmado, sospechoso o probable de coronavirus o eres contacto estrecho de un caso confirmado, debes hacer cuarentena obligatoria sin posibilidad de permisos, y lo mismo aplica si estás ingresando al país.
            </h4>
          </div>
        </div>
      );
      break;
  }
  return toReturn;
};
export default PasoAPasoContainer;

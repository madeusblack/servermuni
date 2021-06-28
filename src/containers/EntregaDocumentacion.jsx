import React from 'react';
import classes from '../assets/styles/EntregaDocumentos.module.css';
import pdfImg from '../assets/static/PDF.svg';
import Cuenta2020 from '../assets/static/header/cuenta2020.pdf';
import Cuenta2019 from '../assets/static/pdf/cuenta publica/cp19.pdf';
import Cuenta2018 from '../assets/static/pdf/cuenta publica/cp18.pdf';
import Cuenta2017 from '../assets/static/pdf/cuenta publica/cp17.pdf';
import Cuenta2016 from '../assets/static/pdf/cuenta publica/cp16.pdf';
import presentacion from '../assets/static/pdf/acta gestion/01-Presentación entrega de Acta/Presentación Acta Gestión Municipal.pdf';
import seguridad2021 from '../assets/static/pdf/acta gestion/03-Plan Comunal de Seguridad Pública Nogales/Plan Comunal de Seguridad Pública 2021.pdf';
import asistenciaSeguridad from '../assets/static/pdf/acta gestion/03-Plan Comunal de Seguridad Pública Nogales/Plan Comunal de Seguridad Pública asistencia sesiones.pdf';
import causas from '../assets/static/pdf/acta gestion/04-Causas vigentes/Causas vigentes.pdf';
import contratos from '../assets/static/pdf/acta gestion/05-Contratos vigentes/Listado contratos vigentes.pdf';
import pladeco1 from '../assets/static/pdf/acta gestion/06-Pladeco/Pladeco 2010-2014.pdf';
import pladeco2 from '../assets/static/pdf/acta gestion/06-Pladeco/Pladeco 2018-2022.pdf';
import reglamentoInterno from '../assets/static/pdf/acta gestion/07-Reglamento Interno Municipal/Reglamento Interno Municipal.pdf';
import reglamentoPlanta from '../assets/static/pdf/acta gestion/08-Reglamento que fija la Planta Municipal/Reglamento que fija la planta de personal municipal.pdf';
import estadoFinanciero2017 from '../assets/static/pdf/acta gestion/09-Estado Financiero Anual/Año 2017 Estado Financiero.pdf';
import estadoFinanciero2018 from '../assets/static/pdf/acta gestion/09-Estado Financiero Anual/Año 2018 Estado Financiero.pdf';
import estadoFinanciero2019 from '../assets/static/pdf/acta gestion/09-Estado Financiero Anual/Año 2019 Estado Financiero.pdf';
import estadoFinanciero2020 from '../assets/static/pdf/acta gestion/09-Estado Financiero Anual/Año 2020 Estado Financiero.pdf';
import modificacionPresupuestaria2 from '../assets/static/pdf/acta gestion/10-Presupuesto Municipal vigente 2021/Presupuesto Municipal año 2021/Modificaciones Presupuestarias año 2021/491-modificación Nº2.pdf';
import modificacionPresupuestaria3 from '../assets/static/pdf/acta gestion/10-Presupuesto Municipal vigente 2021/Presupuesto Municipal año 2021/Modificaciones Presupuestarias año 2021/492-modificación Nº3.pdf';
import modificacionPresupuestaria4 from '../assets/static/pdf/acta gestion/10-Presupuesto Municipal vigente 2021/Presupuesto Municipal año 2021/Modificaciones Presupuestarias año 2021/493-modificación Nº4.pdf';
import modificacionPresupuestaria5 from '../assets/static/pdf/acta gestion/10-Presupuesto Municipal vigente 2021/Presupuesto Municipal año 2021/Modificaciones Presupuestarias año 2021/494-modificación Nº5.pdf';
import modificacionPresupuestaria6 from '../assets/static/pdf/acta gestion/10-Presupuesto Municipal vigente 2021/Presupuesto Municipal año 2021/Modificaciones Presupuestarias año 2021/557-modificación Nº6.pdf';
import modificacionPresupuestaria14 from '../assets/static/pdf/acta gestion/10-Presupuesto Municipal vigente 2021/Presupuesto Municipal año 2021/Modificaciones Presupuestarias año 2021/1117-modificación Nº14.pdf';
import modificacionPresupuestaria15 from '../assets/static/pdf/acta gestion/10-Presupuesto Municipal vigente 2021/Presupuesto Municipal año 2021/Modificaciones Presupuestarias año 2021/1118-modificación Nº15.pdf';
import modificacionPresupuestaria16 from '../assets/static/pdf/acta gestion/10-Presupuesto Municipal vigente 2021/Presupuesto Municipal año 2021/Modificaciones Presupuestarias año 2021/1119-modificación Nº16.pdf';
import modificacionPresupuestaria17 from '../assets/static/pdf/acta gestion/10-Presupuesto Municipal vigente 2021/Presupuesto Municipal año 2021/Modificaciones Presupuestarias año 2021/1159-modificación Nº17.pdf';
import presupuestoMunicipal2021 from '../assets/static/pdf/acta gestion/10-Presupuesto Municipal vigente 2021/Presupuesto Municipal año 2021/Presupuesto municipal año 2021.pdf';
import presupuestoMunicipalEducacion2021 from '../assets/static/pdf/acta gestion/10-Presupuesto Municipal vigente 2021/Presupuesto Municipal Educación año 2021/Presupuesto municipal Educación año 2021.pdf';
import modificacionPresupuestariaEducacion2021 from '../assets/static/pdf/acta gestion/10-Presupuesto Municipal vigente 2021/Presupuesto Municipal Educación año 2021/Modificaciones Presupuestarias Educación/240-modificación Nº1.pdf';
import presupuestoMunicipalSalud2021 from '../assets/static/pdf/acta gestion/10-Presupuesto Municipal vigente 2021/Presupuesto Municipal Salud año 2021/Decreto 2362 APRUEBA PRESUPUESTO DE SALUD PARA AÑO 2021.pdf';

const EntregaDocumentos = () => (
  <div className={classes.mainContainer}>
    <h1 className={classes.mainTitle}>Acta de Traspaso de Gestión Municipal Nogales</h1>
    <div className={classes.subCuenta}>
      <h2 className={classes.title}>01-Presentación entrega de Acta</h2>
      <a className={classes.pdf} name='2020' href={presentacion}>
        <img src={pdfImg} className={classes.pdfImg} alt='' />
        Presentación Acta Gestión Municipal
      </a>
    </div>
    <div className={classes.subCuenta}>
      <h2 className={classes.title}>02-Cuentas Públicas</h2>
      <a className={classes.pdf} name='2020' href={Cuenta2016}>
        <img src={pdfImg} className={classes.pdfImg} alt='' />
        Cuenta Pública 2016
      </a>
      <a className={classes.pdf} name='2020' href={Cuenta2017}>
        <img src={pdfImg} className={classes.pdfImg} alt='' />
        Cuenta Pública 2017
      </a>
      <a className={classes.pdf} name='2020' href={Cuenta2018}>
        <img src={pdfImg} className={classes.pdfImg} alt='' />
        Cuenta Pública 2018
      </a>
      <a className={classes.pdf} name='2020' href={Cuenta2019}>
        <img src={pdfImg} className={classes.pdfImg} alt='' />
        Cuenta Pública 2019
      </a>
      <a className={classes.pdf} name='2020' href={Cuenta2020}>
        <img src={pdfImg} className={classes.pdfImg} alt='' />
        Cuenta Pública 2020
      </a>
    </div>
    <div className={classes.subCuenta}>
      <h2 className={classes.title}>03-Plan Comunal de Seguridad Pública Nogales</h2>
      <a className={classes.pdf} name='2020' href={seguridad2021}>
        <img src={pdfImg} className={classes.pdfImg} alt='' />
        Plan Comunal de Seguridad Pública 2021
      </a>
      <a className={classes.pdf} name='2020' href={asistenciaSeguridad}>
        <img src={pdfImg} className={classes.pdfImg} alt='' />
        Plan Comunal de Seguridad Pública asistencia sesiones
      </a>
    </div>
    <div className={classes.subCuenta}>
      <h2 className={classes.title}>04-Causas vigentes</h2>
      <a className={classes.pdf} name='2020' href={causas}>
        <img src={pdfImg} className={classes.pdfImg} alt='' />
        Causas vigentes
      </a>
    </div>
    <div className={classes.subCuenta}>
      <h2 className={classes.title}>05-Contratos vigentes</h2>
      <a className={classes.pdf} name='2020' href={contratos}>
        <img src={pdfImg} className={classes.pdfImg} alt='' />
        Listado contratos vigentes
      </a>
    </div>
    <div className={classes.subCuenta}>
      <h2 className={classes.title}>06-Pladeco</h2>
      <a className={classes.pdf} name='2020' href={pladeco1}>
        <img src={pdfImg} className={classes.pdfImg} alt='' />
        Pladeco 2010-2014
      </a>
      <a className={classes.pdf} name='2020' href={pladeco2}>
        <img src={pdfImg} className={classes.pdfImg} alt='' />
        Pladeco 2018-2022
      </a>
    </div>
    <div className={classes.subCuenta}>
      <h2 className={classes.title}>07-Reglamento Interno Municipal</h2>
      <a className={classes.pdf} name='2020' href={reglamentoInterno}>
        <img src={pdfImg} className={classes.pdfImg} alt='' />
        Reglamento Interno Municipal
      </a>
    </div>
    <div className={classes.subCuenta}>
      <h2 className={classes.title}>08-Reglamento que fija la Planta Municipal</h2>
      <a className={classes.pdf} name='2020' href={reglamentoPlanta}>
        <img src={pdfImg} className={classes.pdfImg} alt='' />
        Reglamento que fija la planta de personal municipal
      </a>
    </div>
    <div className={classes.subCuenta}>
      <h2 className={classes.title}>09-Estado Financiero Anual</h2>
      <a className={classes.pdf} name='2020' href={estadoFinanciero2017}>
        <img src={pdfImg} className={classes.pdfImg} alt='' />
        Año 2017 Estado Financiero
      </a>
      <a className={classes.pdf} name='2020' href={estadoFinanciero2018}>
        <img src={pdfImg} className={classes.pdfImg} alt='' />
        Año 2018 Estado Financiero
      </a>
      <a className={classes.pdf} name='2020' href={estadoFinanciero2019}>
        <img src={pdfImg} className={classes.pdfImg} alt='' />
        Año 2019 Estado Financiero
      </a>
      <a className={classes.pdf} name='2020' href={estadoFinanciero2020}>
        <img src={pdfImg} className={classes.pdfImg} alt='' />
        Año 2020 Estado Financiero
      </a>
    </div>
    <div className={`${classes.subCuenta} ${classes.presupuestoMainContainer}`}>
      <h2 className={`${classes.title} ${classes.presupuesto}`}>10-Presupuesto Municipal vigente 2021</h2>
      <div className={classes.presupuestoSubContainer}>
        <h2 className={classes.title}>Presupuesto Municipal año 2021</h2>
        <a className={classes.pdf} name='2020' href={presupuestoMunicipal2021}>
          <img src={pdfImg} className={classes.pdfImg} alt='' />
          Presupuesto municipal año 2021
        </a>
        <div className={classes.subContainer}>
          <h2 className={classes.subContainerTitle}>Modificaciones Presupuestarias año 2021</h2>
          <a className={classes.pdf} name='2020' href={modificacionPresupuestaria2}>
            <img src={pdfImg} className={classes.pdfImg} alt='' />
            491-modificación Nº2
          </a>
          <a className={classes.pdf} name='2020' href={modificacionPresupuestaria3}>
            <img src={pdfImg} className={classes.pdfImg} alt='' />
            492-modificación Nº3
          </a>
          <a className={classes.pdf} name='2020' href={modificacionPresupuestaria4}>
            <img src={pdfImg} className={classes.pdfImg} alt='' />
            493-modificación Nº4
          </a>
          <a className={classes.pdf} name='2020' href={modificacionPresupuestaria5}>
            <img src={pdfImg} className={classes.pdfImg} alt='' />
            494-modificación Nº5
          </a>
          <a className={classes.pdf} name='2020' href={modificacionPresupuestaria6}>
            <img src={pdfImg} className={classes.pdfImg} alt='' />
            557-modificación Nº6
          </a>
          <a className={classes.pdf} name='2020' href={modificacionPresupuestaria14}>
            <img src={pdfImg} className={classes.pdfImg} alt='' />
            1117-modificación Nº14
          </a>
          <a className={classes.pdf} name='2020' href={modificacionPresupuestaria15}>
            <img src={pdfImg} className={classes.pdfImg} alt='' />
            1118-modificación Nº15
          </a>
          <a className={classes.pdf} name='2020' href={modificacionPresupuestaria16}>
            <img src={pdfImg} className={classes.pdfImg} alt='' />
            1119-modificación Nº16
          </a>
          <a className={classes.pdf} name='2020' href={modificacionPresupuestaria17}>
            <img src={pdfImg} className={classes.pdfImg} alt='' />
            1159-modificación Nº17
          </a>
        </div>

      </div>
      <div className={classes.presupuestoSubContainer}>
        <h2 className={classes.title}>Presupuesto Municipal Educación año 2021</h2>
        <a className={classes.pdf} name='2020' href={presupuestoMunicipalEducacion2021}>
          <img src={pdfImg} className={classes.pdfImg} alt='' />
          Presupuesto municipal Educación año 2021
        </a>
        <div className={classes.subContainer}>
          <h2 className={classes.subContainerTitle}>Modificaciones Presupuestarias Educación</h2>
          <a className={classes.pdf} name='2020' href={modificacionPresupuestariaEducacion2021}>
            <img src={pdfImg} className={classes.pdfImg} alt='' />
            240-modificación Nº1
          </a>
        </div>

      </div>
      <div className={classes.presupuestoSubContainer}>
        <h2 className={classes.title}>Presupuesto Municipal Salud año 2021</h2>
        <a className={`${classes.pdf} ${classes.pdfSalud}`} name='2020' href={presupuestoMunicipalSalud2021}>
          <img src={pdfImg} className={classes.pdfImg} alt='' />
          Decreto 2362 APRUEBA PRESUPUESTO DE SALUD PARA AÑO 2021
        </a>
      </div>
    </div>
  </div>
);
export default EntregaDocumentos;

import React from 'react';
import { Box } from '@mui/material';

export default function AboutUs() {
  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: '0 auto',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        marginBottom: '10rem',
        marginTop: '5rem',


        '& p': {
          marginBottom: '1.5rem',
          lineHeight: 1.4,
        },
        '& span': {
          fontWeight: 'bold',
          color: '#030303',
        },
      }}
    >
      <p>
        <span>Dream es mucho más que una empresa; somos los arquitectos de los sueños</span> . Nuestro
        principal propósito es brindar experiencias inolvidables a través de la magia de los sueños. En <span>Dream</span>,
        vendemos sueños a las personas que anhelan sumergirse en emocionantes aventuras, reencontrarse con el amor perdido o alcanzar metas que parecían inalcanzables.
        Cuando nuestros clientes compran una experiencia <span>en Dream, pueden estar seguros de que esa misma noche,
        vivirán en un mundo de fantasía y emociones únicas, justo como lo desearon.</span>
      </p>
      <p>
        Con más de 10 años de experiencia, hemos llevado alegría y esperanza a innumerables vidas. En Dream nuestra
        mayor satisfacción es hacer realidad los anhelos y deseos de aquellos que no pudieron cumplir sus metas en la realidad cotidiana.
        Creemos en el poder de la imaginación y cómo puede transformar vidas. Nuestro equipo dedicado de expertos en el mundo onírico trabaja incansablemente
        para crear sueños personalizados que toquen el corazón de nuestros clientes. <span>En Dream, cada noche es una
        oportunidad para reinventar la realidad y hacer que la felicidad sea accesible a todos.</span>
      </p>
    </Box>
  );
}



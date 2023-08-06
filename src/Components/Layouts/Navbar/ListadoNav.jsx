import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SmallerAccordion = styled(Accordion)({
  transform: 'scale(0.8)',
});

export default function ListadoNav() {
  return (
    <div>
      <SmallerAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Categorías</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link className='webFont' to="/category/Amor"><li>Amor</li></Link>
            <Link className='webFont' to="/category/Aventura"><li>Aventura</li></Link>
            <Link className='webFont' to="/category/Dinero"><li>Dinero</li></Link> 
            <Link className='webFont' to="/"><li>Todas</li></Link> 

          </Typography>
        </AccordionDetails>
      </SmallerAccordion>
    </div>
  );
}

     
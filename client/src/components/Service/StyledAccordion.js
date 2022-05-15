import styled from 'styled-components'
import { Accordion } from 'react-bootstrap';

const StyledAccordion = styled(Accordion)`
margin: 10px 0 10px 0;


.value {
  font-style: italic;
}

.field-title {
   color: #7c7c87;
   font-weight: bold;
}

.accordion-item {
  .key-ref {
      :before {
            content: '- ';
            width: 46px;
      }
  }
  .accordion-header {
    .accordion-button {
      font-weight: bold;
      background-color: #f6f3ff;
      color: #795cec;
      :hover {
        z-index: 0 !important;
      }
    }
  }
}

.accordion-button {
  &:focus {
    box-shadow: none;
  }
}

.list-item {
  width: 50%;
  .accordion-header {
    .accordion-button {
        background-color: #f2f2f2;
    }
  }
}
    
`

export default StyledAccordion;
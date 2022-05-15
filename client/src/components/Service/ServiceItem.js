import { Accordion } from 'react-bootstrap';
import StyledAccordion from './StyledAccordion';

export default function ServiceItem({ title, ind, children }) {
    return (
        <StyledAccordion>
            <Accordion.Item eventKey={ind}>
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>
                    {children}
                </Accordion.Body>
            </Accordion.Item>
        </StyledAccordion>
    )
}
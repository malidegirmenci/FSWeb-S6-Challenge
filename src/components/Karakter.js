import {
    UncontrolledAccordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import styled from 'styled-components';
function Karakter(props) {
    const Karakter = styled.div`
        width:35%;
        margin:auto;
        text-align:left;
        font-size:0.8rem;
        margin-bottom:1rem;
        & p {
            margin-bottom:0;
        }
    `
    const { data } = props;
    return (
        <Karakter>
                <UncontrolledAccordion
                    defaultOpen={[
                        '1',
                    ]}
                    stayOpen
                >
                    <AccordionItem>
                        <AccordionHeader targetId={data.name}>
                            {data.name}
                            
                        </AccordionHeader>
                        <AccordionBody accordionId={data.name}>
                            <p>
                                <b>GENDER</b>: {data.gender.toUpperCase()}
                            </p>
                            <p>
                                <b>HEIGHT</b>: {data.height}
                            </p>
                            <p>
                                <b>MASS</b>: {data.mass}
                            </p>
                            <p>
                                <b>BIRTHYEAR</b>: {data.birth_year.toUpperCase()}
                            </p>
                            <p>
                                <b>EYE COLOR</b>: {data.eye_color.toUpperCase()}
                            </p>
                            <p>
                                <b>HAIR COLOR</b>: {data.hair_color.toUpperCase()}
                            </p>
                            <p>
                                <b>SKIN COLOR</b>: {data.skin_color.toUpperCase()}
                            </p>
                            <p>Appears in {data.films.length} films</p>
                            
                        </AccordionBody>
                    </AccordionItem>
                </UncontrolledAccordion>
        </Karakter>
    )
}
export default Karakter;
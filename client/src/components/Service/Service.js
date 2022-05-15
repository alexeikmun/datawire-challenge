import { Col, Row } from 'react-bootstrap';
import ServiceItem from './ServiceItem';

const listKeys = obj => Object.keys(obj).map((key, i) =>
    <p key={i}>
        <strong className="key-ref">{key}:</strong> <span className="value">{obj[key]}</span>
    </p>
);

const singleKeys = obj => {
    const items = {};
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] !== 'object') {
            items[key] = obj[key];
        }
    });
    return listKeys(items);
}

export default function Service({ service, ind }) {
    return (
        <ServiceItem title={"Service :: " + service.spec.type} ind={ind}>
            <fieldset>
                <legend>Spec</legend>
                <Row>
                    <Col>
                        {singleKeys(service.spec)}
                    </Col>
                    {service.spec?.selector && <Col>
                        <p className="field-title">Selector:</p>
                        {listKeys(service.spec.selector)}
                    </Col>
                    }
                </Row>
                <Row>
                    <p className="field-title">Ports:</p>
                    {service.spec.ports?.map((port, i) =>
                        <div className="list-item">
                            <ServiceItem title={(port.name || '') + " :" + port.port} ind={i + 'ports'}>
                                {listKeys(port)}
                            </ServiceItem>
                        </div>
                    )}
                </Row>
            </fieldset>
            <fieldset>
                <legend>Metadata</legend>
                <Row>
                    {singleKeys(service.metadata)}
                </Row>
                <br />
                <Row>
                    {!!service.metadata?.labels &&
                        <Col>
                            <p className="field-title">Labels:</p>
                            {listKeys(service.metadata.labels)}
                        </Col>
                    }
                    {!!service.metadata?.annotations &&
                        <Col>
                            <p className="field-title">Annotations:</p>
                            {listKeys(service.metadata.annotations)}
                        </Col>
                    }
                </Row>

            </fieldset>
            {!!service?.status?.loadBalancer?.ingress && <fieldset>
                <legend>Status</legend>
                <Row>
                    <Col>
                        <p className="field-title">Ingress:</p>
                        {service.status.loadBalancer.ingress.map((item, i) =>
                            <div className="list-item">
                                <ServiceItem title={'Item'} ind={i + "ip"}>
                                    {listKeys(item)}
                                </ServiceItem>
                            </div>
                        )}
                    </Col>

                </Row>
            </fieldset>}
        </ServiceItem>
    )
}
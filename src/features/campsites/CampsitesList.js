import {Col,Row} from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from './campsitesSlice';
import { useState } from 'react';

const CampsitesList = ({ setCampsiteId }) => {
  const [campsiteId,serCampsiteId] = useState(0);
  const campsite = selectAllCampsites();
  return (
    <Row className='ms-auto'>
        {campsite.map((campsite) => {
                        return (
                            <Col md='5' className='m-4' key={campsite.id} onClick={() => setCampsiteId(campsite.id)}>
                                <CampsiteCard campsite={campsite} />
                            </Col>
                        );
                    })}
    </Row>
  )
}

export default CampsitesList

import React from "react";
import { Row, Col, Typography } from "antd";
import { TourCard } from "../../features/tour-card/ui/TourCard";
import { BookTourModal } from "../../features/tour-booking/ui/BookTourModal";
import { useTours } from "../../entities/tour/model/hooks";

const { Title } = Typography;

export const TourPage: React.FC = () => {
    const tours = useTours();
    return (
    <div style={{ padding: 24 }}>
        <Title level={2}>Доступные туры</Title>
        <Row gutter={[24, 24]}>
            {tours.map(tour => (
                <Col key={tour.id} xs={24} sm={12} md={8} lg={6}>
                    <TourCard tour={tour} />
                </Col>
            ))}
        </Row>
      
      <BookTourModal />
    </div>
  );
    
}
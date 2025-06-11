import React from "react";
import { Card, Button, Typography } from "antd";
import { useAppDispatch } from "../../../app/store/hooks";
import type {Tour} from "../../../entities/tour/model/types"
import * as bookingActions from "../../tour-booking/model/bookingSlice"

const {Title, Text} = Typography;

export const TourCard: React.FC<{tour: Tour}> = ({tour}) => {
    const dispatch = useAppDispatch();
    //Функция для активации модального окна при нажатии
    const handleBookClick = () => {
        dispatch(bookingActions.openModal(tour.id))
    }
    return (
        <Card
            cover={<img alt={tour.title} src={tour.image} height={250}></img>}
            style={{width: "100%"}}
        >
            <Title level={4}>{tour.title}</Title>
            <Text>{tour.country}</Text>
            <br />
            <Text>{tour.price}</Text>
            <br />
            <Text>{tour.startDate}</Text>
            <br />
            <Button
                type="primary"
                onClick={handleBookClick}
                style={{marginTop: 16}}
            >
                Забронировать
            </Button>
        </Card>
    )
}
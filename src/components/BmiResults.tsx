import React from 'react';

import {
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
  } from "@ionic/react";

const BmiResult: React.FC<{ result: number }> = props => {

    return (
       
        <IonRow>
            <IonCol offsetMd="3" sizeMd="6">
                <IonCard>
                    <IonCardContent>
                    <h2>{props.result.toFixed(2)}</h2>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
          
    );
};

export default BmiResult;
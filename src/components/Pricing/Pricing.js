import React from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Membership Plans</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>1 month</PricingCardPlan>
                <PricingCardCost>$59.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>3 workouts/week</PricingCardFeature>
                  <PricingCardFeature>Personal trainer</PricingCardFeature>
                  <PricingCardFeature>Cardio hall</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>3 months</PricingCardPlan>
                <PricingCardCost>$54.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>3 workouts/week</PricingCardFeature>
                  <PricingCardFeature>Personal trainer</PricingCardFeature>
                  <PricingCardFeature>Cardio hall</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>6 months</PricingCardPlan>
                <PricingCardCost>$49.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>3 workouts/week</PricingCardFeature>
                  <PricingCardFeature>Personal trainer</PricingCardFeature>
                  <PricingCardFeature>Cardio hall</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;

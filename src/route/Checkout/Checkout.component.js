import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import './Checkout.component.css';

import ContentWrapper from 'Component/ContentWrapper';

import {
    BILLING_STEP,
    DETAILS_STEP,
} from './Checkout.config';

class Checkout extends SourceCheckout {
    
    renderProgress() {

        const {checkoutStep} = this.props;
        var checkoutIndicator  = 1;
        if (checkoutStep === BILLING_STEP) checkoutIndicator= 2;
        if (checkoutStep === DETAILS_STEP) checkoutIndicator= 3;
        
        return (
            <div>
                <div className="progressContainer">
                    <div className="sideLine darkBackground" />
                    <div className="circleIndicator darkBackground">
                        <div className={checkoutIndicator > 1 ? 'centered ticked' : 'centered'}>
                            {checkoutIndicator > 1 ? 'L' : '1'}
                        </div>
                    </div>
                    <div className={(checkoutIndicator > 1)
                    ? "midLine darkBackground"
                    : "midLine"}/> 
                    <div className={(checkoutIndicator > 1)
                    ? "circleIndicator darkBackground"
                    : "circleIndicator"}>
                        <div className={checkoutIndicator > 2 ? 'centered ticked' : 'centered'}>
                            {checkoutIndicator > 2 ? 'L' : '2'}
                        </div>
                    </div>
                    <div className = {(checkoutIndicator === 3)
                    ? "sideLine darkBackground"
                    : "sideLine"} />
                </div>
                <div className = "textContainer">
                    <div className = "shipping">Shipping</div>
                    <div className = {(checkoutIndicator < 2)
                    ? "review fadedText"
                    : "review"}>Review & Payments</div>
                </div>
            </div>
        ) 
    }

    render() {
        return (
            <main block="Checkout">
                { this.renderProgress() }
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() } 
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }      
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }       
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default Checkout;
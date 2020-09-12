import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  couponsTypes: any = ['User', 'User1', 'User2'];
  Limits: any = ['Valid for 3 Months', 'Valid for 6 Months']

  couponForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.couponForm = this.fb.group({
      coupon_type: ['', Validators.required],
      coupon_code: ['', Validators.required],
      valid_from: ['', Validators.required],
      valid_to: ['', Validators.required],
      is_unlimited: ['', Validators.requiredTrue],
      coupon_status: [''],
      coupons: this.fb.array([
        this.fb.group({
          min_amount: ['', Validators.required],
          max_amount: ['', Validators.required],
          discount_type: ['', Validators.required],
          discount: ['', Validators.required],
          max_discount: ['']
        })
      ])
    });
  }
  // tslint:disable-next-line: typedef
  postCoupon() {
    console.log(this.couponForm.value);
  }

  // tslint:disable-next-line: typedef
  get coupons() {
    return this.couponForm.get('coupons') as FormArray;
  }
  // tslint:disable-next-line: typedef
  addNewCoupon() {
    const newCouponRule = this.fb.group({
      min_amount: ['', [Validators.required]],
      max_amount: ['', [Validators.required]],
      discount_type: ['', [Validators.required]],
      discount: ['', [Validators.required]],
      max_discount: ['']
    });
    this.coupons.push(newCouponRule);
  }
  // tslint:disable-next-line: typedef
  removeItem(couponId) {
    this.coupons.removeAt(couponId);
  }
  // tslint:disable-next-line: typedef
  get couponCode() {
    return this.couponForm.get('coupon_code');
  }
  // tslint:disable-next-line: typedef
  get couponType() {
    return this.couponForm.controls;
  }
  // tslint:disable-next-line: typedef
  get validFrom() {
    return this.couponForm.get('valid_from');
  }
  // tslint:disable-next-line: typedef
  get validTo() {
    return this.couponForm.get('valid_to');
  }
  // tslint:disable-next-line: typedef
  get isUnlimited() {
    return this.couponForm.controls;
  }
  // tslint:disable-next-line: typedef
  get couponsVal() {
    return this.couponForm.get('coupons');
  }
}

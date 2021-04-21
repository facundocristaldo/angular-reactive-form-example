import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
  setValue(value: string|null, options: any) {
    if(value===null){
      super.setValue( "",{...options,emitModelToViewChange:true})
    }
    if (value && value.match(/[^0-9|\/]/gi) ){
      super.setValue(this.value,{...options,emitModelToViewChange:true})
      return
    }
    if (value && value.length>5){
      super.setValue(this.value,{...options,emitModelToViewChange:true})
      return
    }
    if (value && value.length==3 && this.value.length===4){
      super.setValue(value.substring(0,2),{...options,emitModelToViewChange:true})
      return
    }
    if (value && value.length>2 && value[2]!="/"){
      super.setValue(value.substring(0,2)+"/"+value.substr(2),{...options,emitModelToViewChange:true})
      return
      
    }
    super.setValue(value,{...options,emitModelToViewChange:true})
  }
}

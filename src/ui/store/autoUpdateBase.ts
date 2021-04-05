import { IAutoUpdate } from "../../types/storeContract";

 class AutoUpdateBase<TBinding> implements IAutoUpdate<TBinding>{
    
     protected binding?: (arg: TBinding) => void;
    
     resolveValue(): TBinding{ throw new Error('Not implements'); };
     reciveValue(value: TBinding): void{ throw new Error('Not implements'); };

    bind(bindingFunc: (arg: TBinding) => void): void {
       this.binding = bindingFunc;
    }

    update(): void {
       if(this.binding !== undefined){
        this.binding.call(null, this.resolveValue());
       }else{
        throw new Error('The binding not has been set.');
       }
    }

}

export {AutoUpdateBase};
import checkNumInputs from './checkNumInputs'


const changeModalState = (state)=>{
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
            windowsWidth = document.querySelectorAll('#width'),
            windowsHeight = document.querySelectorAll('#height'),
            windowsType = document.querySelectorAll('#view_type'),
            windowsProfile = document.querySelectorAll('.checkbox');


            checkNumInputs('#width')
            checkNumInputs('#height')


            function bindActionsToElems(event,elem,prop){
                elem.forEach((item,i)=>{
                    item.addEventListener(event,()=>{
                        switch(item.nodeName){
                            case 'SPAN':
                                state[prop] = i;
                                break;
                                case 'INPUT':
                                    if(item.getAttribute('type') === 'checkbox'){
                                        i === 0 ? state[prop] =='Cool': state[prop]="Hot"
                                        elem.forEach((box,j)=>{
                                            box.checked = false;
                                            if(i==j){
                                            box.checked = true;
                                            }
                                        })
                                    }else{
                                        state[prop] = item.value
                                    }
                                    break;
                                    case 'SELECT':
                                        state[prop] = item.value
                                        break;
                        }
                        console.log(state);    
                    });
                });

            }
            bindActionsToElems('click',windowForm,'form');
            bindActionsToElems('input',windowsHeight,'height');
            bindActionsToElems('input',windowsWidth,'widht');
            bindActionsToElems('change',windowsType,'type');
            bindActionsToElems('change',windowsProfile,'profile');
            
}

export default changeModalState
window.addEventListener('load',function(){

    let playerHand;
    let rock = document.getElementById('rock');
    let paper = document.getElementById('paper');
    let scissors = document.getElementById('scissors');
    let cpu = document.getElementById('cpu');
    let result = document.getElementById('result');

    function janken(hand){
        
          let hands =['rock','scissors','paper']
          let cpu =[Math.floor(Math.random() * hands.length)];
          cpu.innerHTML = '相手の手は'　+ cpu + 'です。'
          result.innerHTML = judge(hand,cpu)
          result.judge
       
       function judge(hand,cpu){
            if(playerHnd!==cpu){
                if(cpu==='rock'&&playerHand === 'paper'||cpu==='siccisorrs'&&playerHand==='rock'||cpu==='paper'&&playerHand==='scissors'){//勝利
                    result=" YOU WIN ";
                }else if(cpu==='rock'&&playerHand === 'scissors'||cpu==='paper'&&playerHand==='rock'||cpu==='rock'&&playerHand==='scissors'){//敗北
                    return " YOU LOSE";
                }
            }else if(cpu===playerHand){　　//引き分け
                return " DROW " ;
            }
       
    }
}
});
    rock.addEventListener('click',function(){
        myhand='rock'
    });
    paper.addEventListener('click',function(){
        myHand='paper'
    });
    scissors.addEventListener('click',function(){
        myHand='scissors'
    });




    
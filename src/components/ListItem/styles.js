import styled from "styled-components";

export const Container = styled.div(({ done }) => (

    `
 border-top: 1px solid var(--gray-400);

 .content {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;

      
        padding: 1rem;
       
        
        width: 100%;
        height: 5rem;
        
        /* Gray 500 */
        
        background: var(--gray-500);
        /* Gray 400 */
        
        border: 1px solid var(--gray-400);

        border-radius: 0.5rem;

        .task {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        div{
        display: flex;
        flex-direction: row;       
        align-items: flex-start;
        
        gap: 0.75rem;
    }

 
        p {
        color: var(--gray-100);
        text-decoration: ${done ? 'line-through' : 'initial'};
    }

    button {
        background: transparent;
        border: 0;
        color: var(--gray-300);
        line-height: 0;
        border-radius: 2px;

        cursor:pointer;     
      
      
      }

      button :hover {
 
 color: var(--red-500);
}

input {
 
 width: 1rem;
 height: 1rem;

}

// input[type="checkbox"]:checked {
//     display: none
//     }
     
     
   
    }

    .tarefaConcluida {
        padding-top: 0.5rem;
        display: flex;
        justify-content: space-between;


        time{
      
        
      font-size: 0.75rem;
     
  }
    }

    }


    
    `



))
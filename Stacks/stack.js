class Stack
{
    #count
    #storage
    #limit
    constructor(limit=10)
    {
        this.#count=0;
        this.#storage={};
        this.#limit=limit;
    }
    push(value)
    { 
        if(value)
        {
            if(!this.isFull())
                this.#storage[this.#count++]=value;
            else console.log("Stack Overflow :(");
        }
        else console.log("Please Pass a Value to 'push(){} !!'");
        
    }
    pop()
    {
        if(!this.isEmpty())
        {
            let toBePopped=this.#storage[--this.#count];
            delete this.#storage[this.#count];
            return toBePopped;
        }
        else 
        {
            console.log("Stack is Empty :(");
            return null;
        }
    }
    isEmpty()
    {
        return this.size()>0 ? false : true;
    }
    isFull()
    {
        return this.size()===this.#limit ? true : false;
    }
    size()
    {
        return this.#count;
    }
    peek()
    {
        if(!this.isEmpty())
        {
            let peekItem=this.#storage[this.#count-1];
            return peekItem;
        }
        else return null;
    }
};
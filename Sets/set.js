class Set
{
    #container;
    #limit;
    constructor(limit=10)
    {
        this.#container=[];
        this.#limit=limit;
    }
    has(element)
    {
        return (this.#container.includes(element));
    }
    values()
    {
        return this.#container;
    }
    add(element)
    {
        if(this.#limit!==this.size())
        {
            if(!this.has(element))
            {
                this.#container.push(element);
                return true;
            }
        }
        else console.log("Set Overflow :(");
        return false;
    }
    remove(element)
    {
        if(this.has(element))
        {
            let idx=this.#container.indexOf(element);
            this.#container.splice(idx,1);
            return true;
        }
        return false;
    }
    size()
    {
        return this.#container.length;
    }
    union(otherSet)
    {
        let unionSet=new Set(this.#limit+otherSet.size());
        let firstSet=this.values();
        let secondSet=otherSet.values();
        firstSet.forEach((e)=>
        {
            unionSet.add(e);
        });
        secondSet.forEach((e)=>
        {
            unionSet.add(e);
        });
        console.log(unionSet.values());
        return unionSet;
    }
    unionAndUpdate(otherSet)
    {
        this.changeLimit(this.#limit+otherSet.size());
        let firstSet=this.values();
        let secondSet=otherSet.values();
        secondSet.forEach((e)=>
        {
            this.add(e);
        });
        console.log(firstSet);
        return this;
    }
    intersection(otherSet)
    {
        let intersectionSet=new Set(this.#limit+otherSet.size());
        let firstSet=this.values();
        firstSet.forEach((e)=>
        {
            if(otherSet.has(e))
               intersectionSet.add(e);
        });
        console.log(intersectionSet.values())
        return intersectionSet;
    }
    intersectionAndUpdate(otherSet)
    {
        this.changeLimit(this.#limit+otherSet.size());
        let firstSet=this.values();
        firstSet.slice().forEach((e)=>
        {
            if(otherSet.has(e))
                this.add(e);
        });
        console.log(firstSet);
        return this;
    }
    difference(otherSet)
    {
        let differenceSet=new Set(this.#limit+otherSet.size());
        let firstSet=this.values();
        firstSet.forEach((e)=>
        {
            if(!otherSet.has(e))
               differenceSet.add(e);
        });
        console.log(differenceSet.values())
        return differenceSet;
    }
    differenceAndUpdate(otherSet)
    {
        this.changeLimit(this.#limit+otherSet.size());
        let firstSet=this.values();
        firstSet.slice().forEach((e)=>
        {
            if(otherSet.has(e))
                this.remove(e);
        });
        console.log(firstSet);
        return this;
    }
    symmetricDifference(otherSet)
    {
        let symDifferenceSet=new Set(this.#limit+otherSet.size());
        let firstSet=this.values();
        let secondSet=otherSet.values();
        firstSet.forEach((e)=>
        {
            if(!otherSet.has(e))
               symDifferenceSet.add(e);
        });
        secondSet.forEach((e)=>
        {
            if(!this.has(e))
                symDifferenceSet.add(e);
        });
        console.log(symDifferenceSet.values())
        return symDifferenceSet;
    }
    symmetricDifferenceAndUpdate(otherSet)
    {
        this.changeLimit(this.#limit+otherSet.size());
        let firstSet=this.values();
        let firstSet_prev=firstSet.slice();
        let secondSet=otherSet.values();
        firstSet.slice().forEach((e)=>
        {
            if(otherSet.has(e))
                this.remove(e);
        });
        secondSet.forEach((e)=>
        {
            if(!firstSet_prev.includes(e))
                this.add(e);
        });
        console.log(firstSet);
        return this;
    }
    changeLimit(limit)
    {
        if(parseInt(limit))
        {
            this.#limit=parseInt(limit);
            return true;
        }
        return false;
    }
    clear()
    {
        this.#container=[];
        this.#limit=10;
    }
};
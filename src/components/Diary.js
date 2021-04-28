import {useState} from 'react';


const Diary = ()=> {

    

    return (
        <div className="form">
            <form >
                <table>

                <tr>
<td>Date</td>
<td>
<input type="Date" name="date" /> 

</td>



                    </tr>
                    <tr>
<td>Event</td>
<td>
<textarea id="w3review" name="w3review" rows="4" cols="50">
 
  </textarea>

</td>



                    </tr>


                    <tr>
<td>Importance</td>

<td>
<select name="imp" id="imp">
  <option value="High">High</option>
  <option value="Modarate">Modarate</option>
  <option value="Less">Less Important</option>
  
</select>

</td>


                    </tr>

                    <tr>
<td>

<input type="submit" value="Save" ></input>

</td>


                    </tr>
                </table>
            </form>
        </div>
    );
}

export default Diary;
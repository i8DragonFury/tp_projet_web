import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from "../../shared/components/UIElements/ErrorModal"
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import './PlaceForm.css';

const NewStage = () => {
    const auth = useContext(AuthContext);
    const { error, sendRequest, clearError } = useHttpClient();
    const [formState, inputHandler] = useForm(
      {
        nom: {
          value: '',
          isValid: false
        },
        courriel: {
          value: '',
          isValid: false
        },
        noTel: {
          value: '',
          isValid: false
        },
        nomEntreprise:{
            value: '',
            isValid: false
        },
        adresseEntreprise:{
            value: '',
            isValid: false
        },
        typeStage:{
            value:'',
            isValid: false
        },
        nbPosteDispo:{
            value: '',
            isValid: false
        },
        descStage: {
            value:'',
            isValid: false
        },
        remuneration:{
            value:'',
            isValid: false
        }
      },
      false
    );
    const history = useHistory();

    const placeSubmitHandler  = async event =>  {
      event.preventDefault();
      console.log(formState.inputs); // send this to the backend!
  
      try {
        const reponseData = await sendRequest(
          "http://localhost:5000/api/stages",
          "POST",
          JSON.stringify({
            nom: formState.inputs.nom.value,
            courriel: formState.inputs.description.value,
            noTel: formState.inputs.address.value,
            nomEntreprise: auth.userId,
            adresseEntreprise: '',
            typeStage: '',
            nbPosteDispo:'',
            descStage:'',
            remuneration:''
          }),
          {
            "Content-Type": "application/json",
          }
        );
  
        console.log(reponseData);
       // history.push("/");
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <React.Fragment>
        <ErrorModal error={error} onClear={clearError}/>
      <form className="place-form" onSubmit={placeSubmitHandler}>
        <Input
          id="title"
          element="input"
          type="text"
          label="Titre"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Entrez un nom valide."
          onInput={inputHandler}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Entrez une description valide (au moins 5 caractères)."
          onInput={inputHandler}
        />
        <Input
          id="address"
          element="input"
          label="Adresse"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Entrez une adresse valide."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          Ajouter place
        </Button>
      </form>
      </React.Fragment>
    );
  };
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TextInput,
} from 'react-native';
import axios from 'axios';

const QuestionsScreen = () => {
  const [answers, setAnswers] = useState({});
  const [loading,setLoading] = useState(false);
  const [result,setResult] = useState({});
  const [femaleres,setFemaleres] = useState('');
  const [age,setAge] = useState('');
  const [married,setMarried] = useState('');
  const [edu,setEdu] = useState('');
  const [hh_totalmembers,setHh_totalmembers] = useState('');
  const [asset_durable,setAsset_durable] = useState('');
  const [asset_phone,setAsset_phone] = useState('');
  const [cons_alcohol,setCons_alcohol] = useState('');
  const [ent_business,setEnt_business] = useState('');
  const [ent_employees,setEnt_employees] = useState('');
  const [ent_nonag_flowcost,setEnt_nonag_flowcost] = useState('');
  const [ent_total_cost,setEnt_total_cost] = useState('');
  const [fs_adwholed_often,setFs_adwholed_often] = useState('');
  const [fs_chskipm_often,setFs_chskipm_often] = useState('');
  const [fs_chwholed_often,setFs_chwholed_often] = useState('');
  const [fs_enoughtom,setFs_enoughtom] = useState('');
  const [med_portion_sickinjured,setMed_portion_sickinjured] = useState('');
  const [med_healthconsult,setMed_healthconsult] = useState('');
  const [ed_expenses_perkid,setEd_expenses_perkid] = useState('');
  const [nondurable_investment,setNondurable_investment] = useState('');
  const [given_mpesa,setGiven_mpesa] = useState('');
  const [amount_saved_mpesa,setAmount_saved_mpesa] = useState('');

  const handleAnswerChange = (question, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: value,
    }));
  };


  const handleSubmit = () => {

    const femeleresGender = femaleres.toLowerCase() === 'male' ? 0 : 1;
    const marriedclient = married.toLowerCase() === 'no' ? 0 : 1;
    const business = ent_business.toLowerCase() === 'no' ? 0 : 1;
    const enoughfood = fs_enoughtom.toLowerCase() === 'no' ? 0 : 1;
    const mpesa = given_mpesa.toLowerCase() === 'no' ? 0 : 1;

    const data = {
      femaleres:femeleresGender,
      age,
      married:marriedclient,
      edu,
      hh_totalmembers,
      asset_durable,
      asset_phone,
      cons_alcohol,
      ent_business:business,
      ent_employees,
      ent_nonag_flowcost,
      ent_total_cost,
      fs_adwholed_often,
      fs_chskipm_often,
      fs_chwholed_often,
      fs_enoughtom:enoughfood,
      med_portion_sickinjured,
      med_healthconsult,
      ed_expenses_perkid,
      nondurable_investment,
      given_mpesa:mpesa,
      amount_saved_mpesa,
    };

    console.log(data);

    axios.post('http://192.168.43.77:71/predict', data)
      .then(response => {
        // Handle the response from the API
        console.log(response.data);
        setResult(response.data);
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });

      console.log(result);
  };

    


  return (
    <ImageBackground source={require('../assets/background1.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.grayContainer}>
          <ScrollView style={styles.scrollContainer}>
            <Text style={styles.title}>Questions for Prediction</Text>
  
           {/* {questions.map((question) => (
              <View key={question.key} style={styles.questionContainer}>
                <Text style={styles.questionText}>{question.text}</Text>
                <TextInput
                  style={styles.answerInput}
                  placeholder="Enter your answer"
                  value={answers[question.key] || ''}
                  onChangeText={(value) => handleAnswerChange(question.key, value)}
                />
              </View>
            ))}
           */}

            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>What is the Client's Gender?</Text>
              <TextInput
                style={styles.answerInput}
                placeholder="Enter your answer"
                value={femaleres}
                onChangeText={(value) =>setFemaleres(value)}
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>Enter the age of the Client</Text>
              <TextInput
                style={styles.answerInput}
                placeholder="Enter your answer"
                value={age}
                onChangeText={(value) => setAge(value)}
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>Is the Client married?</Text>
              <TextInput
                style={styles.answerInput}
                placeholder="Enter your answer"
                value={married}
                onChangeText={(value) => setMarried(value)}
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>How many years did the Client spend on education?</Text>
              <TextInput
                style={styles.answerInput}
                placeholder="Enter your answer"
                value={edu}
                onChangeText={(value) => setEdu(value)}
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>How many members are in the Client's house</Text>
              <TextInput
                style={styles.answerInput}
                placeholder="Enter your answer"
                value={hh_totalmembers}
                onChangeText={(value) => setHh_totalmembers(value)}
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>How much is the value for durable assets in USD</Text>
              <TextInput
                style={styles.answerInput}
                placeholder="Enter your answer"
                value={asset_durable}
                onChangeText={(value) => setAsset_durable(value)}
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>How much is the value of the Client's phone in USD</Text>
              <TextInput
                style={styles.answerInput}
                placeholder="Enter your answer"
                value={asset_phone}
                onChangeText={(value) => setAsset_phone(value)}
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>How much does the Client spend on alcohol? (USD)</Text>
              <TextInput
                style={styles.answerInput}
                placeholder="Enter your answer"
                value={cons_alcohol}
                onChangeText={(value) => setCons_alcohol(value)}
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>Non-agricultural business as primary income</Text>
              <TextInput
                style={styles.answerInput}
                placeholder="Enter your answer"
                value={ent_business}
                onChangeText={(value) => setEnt_business(value)}
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>How many employees do you have?</Text>
              <TextInput
                style={styles.answerInput}
                placeholder="Enter your answer"
                value={ent_employees}
                onChangeText={(value) => setEnt_employees(value)}
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>Non-agricultural business flow in USD</Text>
              <TextInput
                style={styles.answerInput}
                placeholder="Enter your answer"
                value={ent_nonag_flowcost}
                onChangeText={(value) => setEnt_nonag_flowcost(value)}
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>Total expenses monthly?</Text>
              <TextInput
                style={styles.answerInput}
                placeholder="Enter your answer"
                value={ent_total_cost}
                onChangeText={(value) => setEnt_total_cost(value)}
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>What is the number of whole days without food last month for an adult?</Text>
              <TextInput
                style={styles.answerInput}
                placeholder="Enter your answer"
                value={fs_adwholed_often}
                onChangeText={(value) => setFs_adwholed_often(value)}
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>How many meals skipped by children?</Text>
              <TextInput
                style={styles.answerInput}
                placeholder="Enter your answer"
                value={fs_chskipm_often}
                onChangeText={(value) => setFs_chskipm_often(value)}
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>How many days do children go without eating?</Text>
              <TextInput
                style={styles.answerInput}
                placeholder="Enter your answer"
                value={fs_chwholed_often}
                onChangeText={(value) => setFs_chwholed_often(value)}
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>Is there enough food in the house for tomorrow?</Text>
              <TextInput
                style={styles.answerInput}
                placeholder="Enter your answer"
                value={fs_enoughtom}
                onChangeText={(value) => setFs_enoughtom(value)}
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>What is the proportion of household sick/injured in a month?</Text>
              <TextInput
                style={styles.answerInput}
                placeholder="Enter your answer"
                value={med_portion_sickinjured}
                onChangeText={(value) => setMed_portion_sickinjured(value)}
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>What is the proportion of illnesses where a doctor was consulted in a month?</Text>
              <TextInput
                style={styles.answerInput}
                placeholder="Enter your answer"
                value={med_healthconsult}
                onChangeText={(value) => setMed_healthconsult(value)}
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>What are the education expenses of a kid?</Text>
              <TextInput
                style={styles.answerInput}
                placeholder="Enter your answer"
                value={ed_expenses_perkid}
                onChangeText={(value) => setEd_expenses_perkid(value)}
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>What is the cost of non-durable investment?</Text>
              <TextInput
                style={styles.answerInput}
                placeholder="Enter your answer"
                value={nondurable_investment}
                onChangeText={(value) => setNondurable_investment(value)}
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>Have you ever given M-Pesa?</Text>
              <TextInput
                style={styles.answerInput}
                placeholder="Enter your answer"
                value={given_mpesa}
                onChangeText={(value) => setGiven_mpesa(value)}
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>What is the amount saved in M-Pesa?</Text>
              <TextInput
                style={styles.answerInput}
                placeholder="Enter your answer"
                value={amount_saved_mpesa}
                onChangeText={(value) => setAmount_saved_mpesa(value)}
              />
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <View style={{height:200, backgroundColor:'lightblue'}}>
              <Text style={{color:'black'}}>
               {result.message} - {result.probability}
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
  
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
 /* grayContainer: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,
    //width: '90%',
  },
  */
  scrollContainer: {
    flex: 1,
    maxHeight: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    color: 'black',
    fontSize: 16,
    marginBottom: 5,
  },
  answerInput: {
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QuestionsScreen;

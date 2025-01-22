//IMPORTAÇÕES
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

//ESTADO INICAL DOS COMPONENTES
export default function App() {
const [currentQuestion, setCurrentQuestion] = useState(0);
const [score, setScore] = useState(0);
const [showScore, setShowScore] = useState(false);

//ARRAY DAS PERGUNTAS - Digitar a parte do código (QUIZ - 03)
const questions = [
{
question: "1) Qual é o país mais extenso do mundo em termos de área territorial?",
options: ["A) Rússia", "B) Canadá", "C) China", "D) Estados Unidos"],
correctAnswer: "A) Rússia"
},

{
question: "2) Qual é o país com a maior população do mundo?",
options: ["A) Índia", "B) China", "C) Estados Unidos", "D) Indonésia"],
correctAnswer: "B) China"
},

{
question: "3) Qual é o país considerado o teto do mundo devido à sua altitude média elevada?",
options: ["A) Tibete", "B) Nepal", "C) Butão", "D) Paquistão"],
correctAnswer: "A) Tibete"
},

{
question: "4) Qual é o país da América do Sul que faz fronteira com o maior número de países?",
options: ["A) Brasil", "B) Argentina", "C) Bolívia", "D) Colômbia"],
correctAnswer: "A) Brasil"
},

{
question: "5) Qual é o país da Europa que é dividido em duas partes principais pela famosa cordilheira dos Alpes?",
options: ["A) Itália", "B) França", "C) Suíça", "D) Áustria"],
correctAnswer: "C) Suíça"
},

{
question: "6) Qual é o país que possui a maior reserva de petróleo do mundo?",
options: ["A) Arábia Saudita", "B) Irã", "C) China", "D) Estados Unidos"],
correctAnswer: "A) Arábia Saudita"
},

{
question: "7) Qual é o país que possui a maior economia da África?",
options: ["A) Egito", "B) Marrocos", "C) Africa do Sul", "D) Indonésia"],
correctAnswer: "B) Africa do Sul"
},

{
question: "8) Qual é o menor país da América do Sul em área territorial?",
options: ["A) Guiana", "B) Suriname", "C) Uruguai", "D) Guiana Francesa"],
correctAnswer: "D) Guiana Francesa"
},
{
question: "9) Qual é a capital da Austrália?",
options: ["A) Sydney", "B) Melbourne", "C) Canberra", "D) Brisbane"],
correctAnswer: "C) Canberra"
},
{
question: "10) Qual é o país que possui a maior população de língua portuguesa no mundo?",
options: ["A) Brasil", "B) Portugal", "C) Angola", "D) Moçambique"],
correctAnswer: "A) Brasil"
}
];

//FUNÇÃO PARA TRATAR A RESPOSTA
// Função chamada quando o utilizador clica numa resposta
const handleAnswerClick = (selectedAnswer) => {
// Verifica se a resposta selecionada está correta
const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
// Se estiver correta, incrementa a pontuação
if (isCorrect) {
setScore(score + 1);
}
// Passa para a próxima pergunta se houver mais perguntas
if (currentQuestion + 1 < questions.length) {
setCurrentQuestion(currentQuestion + 1);
} else {
// Caso contrário, mostra a pontuação final
setShowScore(true);
}
};

//FUNÇÃO PARA REINICIAR O QUIZ
const handleRestartQuiz = () => {
// Define a questão atual para a primeira
setCurrentQuestion(0);
// Define a pontuação para zero
setScore(0);
// Oculta a pontuação final
setShowScore(false);
};

//RENDERIZAÇÃO DO COMPONENTE
return (
<View style={styles.container}>
{showScore ? (
<View style={[styles.scoreContainer, { backgroundColor: '#1E90FF' }]}>
<Text style={[styles.scoreText, { color: '#FFFFFF' }]}>Você acertou {score} de {questions.length} perguntas</Text>
<Button style= {styles.botao} title="Reiniciar Quiz" onPress={handleRestartQuiz} color="#" />
</View>
) : (
<View style={styles.questionContainer}>
<Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
{questions[currentQuestion].options.map((option, index) => (
<TouchableOpacity
key={index}
style={styles.answerButton}
onPress={() => handleAnswerClick(option)}
>
<Text style={styles.answerButtonText}>{option}</Text>
</TouchableOpacity>
))}
</View>
)}
</View>
);
}

//CSS - ESTILO - Digitar a parte do código (QUIZ - 07)
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#556B2F',
paddingVertical: 20,
},
questionContainer: {
width: '90%',
maxWidth: 400,
padding: 20,
backgroundColor: '#424242',
borderRadius: 10,
elevation: 5,
shadowColor: '#000000',
shadowOffset: { width: 0, height: 5 },
shadowOpacity: 0.3,
shadowRadius: 5,
},
questionText: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 10,
color: '#FFFFFF',
},
answerButton: {
backgroundColor: '#008000',
padding: 15,
borderRadius: 10,
marginVertical: 10,
},
answerButtonText: {
fontSize: 16,
color: '#FFFFFF',
},
scoreText: {
fontSize: 20,
fontWeight: 'bold',
marginBottom: 10,
color: '#00FFFF',
marginTop: 35,
marginLeft: 10,
marginRight: 10,
},
scoreContainer: {
borderRadius: 10,
height: 120,
color: '#006400',
},
botao: {
marginTop: 10,
}
});
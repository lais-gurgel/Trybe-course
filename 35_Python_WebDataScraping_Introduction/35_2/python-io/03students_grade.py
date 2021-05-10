# Exercício 3: Dado um arquivo contendo estudantes e suas respectivas notas, escreva um programa que lê todas essas informações e filtre somente as pessoas que estão aprovadas, escrevendo seus nomes em outro arquivo. A nota miníma para aprovação é 6.

# Criação de base de dados
students_and_grades = ["Marcos 10", "Felipe 4", "José 6", "Ana 10", "Maria 9", "Miguel 5"]
students_grade_file = open("students_grade.txt", mode="w")
for student_grade in students_and_grades:
    print(student_grade, file=students_grade_file)
students_grade_file.close()

# Filtragem de alunos aprovados
students_grade_file = open("students_grade.txt", mode="r")
approved_students = open("approved_students.txt", mode="w")

students_to_approve = []

for student in students_grade_file:
    student_and_grade = student.split()
    grade = int(student_and_grade[1])
    if grade >= 6:
        students_to_approve.append(student_and_grade[0])

for student in students_to_approve:
    print(student, file=approved_students)

approved_students.close()
students_grade_file.close()

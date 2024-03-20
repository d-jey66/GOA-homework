user_score_N1 = float(input("enter score N1: "))  

user_score_N2 = float(input("enter score N2: "))

user_score_N3 = float(input("enter score N3: "))

user_score_N4 = float(input("enter score N4: "))

user_score_N5 = float(input("enter score N5: "))

avg_score = (user_score_N1 + user_score_N2 + user_score_N3 + user_score_N4 + user_score_N5) / 4

if avg_score >=9 and avg_score <=10 :
    print("გილოცავ მატრიცელო. შენი საშუალო ქულაა: " + str(avg_score) + "გადმოგეცა ბანძი 300 ლარიანი ტოსტერი,რომელშიც შენი მთელი ცხოვრება დახარჯე")

elif avg_score <=5 and avg_score >= 0: 
    print("შენი ქულაა: " + str(avg_score) + "გილოცავ მატრიცას გაექეცი")

elif avg_score >5 and avg_score <9: 
    print("შენი ქულაა: " + str(avg_score) + " you are mid")

else: 
    print("შენი ქულაა: " + str(avg_score) + " there is something wrong with you")
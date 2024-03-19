import Plan from "../Plan/Plan";

const Plans = () => {

    const info = [
          {
            "name": "Starter Plan",
            "description": "Ideal for beginners looking to get started with basic gym access and equipment usage.",
            "price": "$29.99/month",
            "features": [
              "Access to gym facilities",
              "Cardio equipment section",
              "Limited group fitness classes"
            ]
          },
          {
            "name": "Silver Plan",
            "description": "Perfect for individuals seeking a comprehensive gym experience with additional amenities.",
            "price": "$49.99/month",
            "features": [
              "Access to gym facilities",
              "Cardio equipment section",
              "Full range of group fitness classes",
              "Sauna and steam room access"
            ]
          },
          {
            "name": "Gold Plan",
            "description": "For those who want it all - top-tier access to facilities, personalized training, and exclusive perks.",
            "price": "$79.99/month",
            "features": [
              "Access to gym facilities",
              "Cardio equipment section",
              "Unlimited group fitness classes",
              "Personalized training sessions",
              "Nutritional counseling",
              "Juice bar discounts"
            ]
          },
          {
            "name": "Student Plan",
            "description": "Tailored for students on a budget, providing essential gym access at a discounted rate.",
            "price": "$24.99/month",
            "features": [
              "Access to gym facilities during off-peak hours",
              "Limited group fitness classes"
            ]
          },
          {
            "name": "Family Plan",
            "description": "Designed for families looking to stay fit together, with flexible membership options for all.",
            "price": "$99.99/month",
            "features": [
              "Access to gym facilities for the entire family",
              "Discounted rates on additional family members",
              "Childcare services during workout sessions"
            ]
          },
          {
            "name": "Corporate Plan",
            "description": "Tailored for corporate teams promoting health and wellness among employees.",
            "price": "Contact to Office",
            "features": [
              "Group gym membership discounts",
              "Customized wellness programs",
              "Exclusive team-building fitness events"
            ]
          }
        ]
      

    return (
        <div>
            <h1 className='text-4xl font-bold text-center p-8'>
                Best Deals in Town
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                {
                    info.map((offer, idx) => <Plan
                        key={idx}
                        offer={offer}
                    ></Plan>)
                }
            </div>
            
        </div>
    );
};

export default Plans;
import policy1 from "../../assets/images/policy1.png";
import policy2 from "../../assets/images/policy2.png";
import policy3 from "../../assets/images/policy3.png";
import policy4 from "../../assets/images/policy4.png";

const Advantages =()=> {
  return (
    <section className="bg-[#1f2329] ">
        <div className="grid grid-cols-4 gap-8 p-8">
            <div className="flex gap-4 items-center">
                <div className="flex group hover:cursor-pointer hover:bg-[#fa3253] hover:border-[#fa3253] transition-all duration-150 justify-center items-center w-16 h-16 rounded-full border border-[#34373d]">
                    <img className="logo w-8" src={policy1} />
                </div>
                <div className="text-[#ffffff] flex flex-col gap-1">
                    <p className="font-medium text-xl">Free Shipping</p>
                    <p className="text-sm font-medium">On order over $49.00</p>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <div className="flex group hover:cursor-pointer hover:bg-[#fa3253] hover:border-[#fa3253] transition-all duration-150 justify-center items-center w-16 h-16 rounded-full border border-[#34373d]">
                    <img className="logo w-8" src={policy2} />
                </div>
                <div className="text-[#ffffff] flex flex-col gap-1">
                    <p className="font-medium text-xl">Money Guarantee</p>
                    <p className="text-sm font-medium">Within 30 days for an exchange</p>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <div className="flex group hover:cursor-pointer hover:bg-[#fa3253] hover:border-[#fa3253] transition-all duration-150 justify-center items-center w-16 h-16 rounded-full border border-[#34373d]">
                    <img className="logo w-8" src={policy3} />
                </div>
                <div className="text-[#ffffff] flex flex-col gap-1">
                    <p className="font-medium text-xl">Online Support</p>
                    <p className="text-sm font-medium">24 hours a day, 7 days a week</p>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <div className="flex group hover:cursor-pointer hover:bg-[#fa3253] hover:border-[#fa3253] transition-all duration-150 justify-center items-center w-16 h-16 rounded-full border border-[#34373d]">
                    <img className="logo w-8" src={policy4} />
                </div>
                <div className="text-[#ffffff] flex flex-col gap-1">
                    <p className="font-medium text-xl">Flexible Payment</p>
                    <p className="text-sm font-medium">Pay with multiple credit cards</p>
                </div>
            </div>
        </div>  
    </section>
  );
}

export default Advantages; 
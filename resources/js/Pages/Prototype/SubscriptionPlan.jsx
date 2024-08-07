import SubscriptionCard from "@/Components/SubscriptionCard";
import Authenticated from "@/Layouts/Authenticated/Index";

const SubscriptionPlan = () => {
    return (
        <Authenticated>
            <div className="flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                {/* Pricing Card */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    <SubscriptionCard
                        name={"Basic"}
                        price={299000}
                        durationInMonth={3}
                        features={["feature 1", "feature 2", "feature 3"]}
                    />
                    <SubscriptionCard
                        name={"Premium"}
                        price={899000}
                        durationInMonth={6}
                        features={[
                            "feature 1",
                            "feature 2",
                            "feature 3",
                            "feature 4",
                            "feature 5",
                            "feature 6",
                        ]}
                        isPremium
                    />
                </div>
                {/* /Pricing Card */}
            </div>
        </Authenticated>
    );
};

export default SubscriptionPlan;

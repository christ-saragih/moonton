import SubscriptionDetail from "./SubscriptionDetail";
import { MenuItem } from "./MenuItem";
import { userMenus, userOthers } from "./MenuList";
import { Link } from "@inertiajs/react";

const Sidebar = ({ auth }) => {
    return (
        <aside className="fixed z-50 w-[300px] h-full">
            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                <a href="/">
                    <img src="/assets/images/moonton.svg" alt="" />
                </a>
                <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
                    {/* Menu */}
                    <div>
                        <div className="text-gray-1 text-sm mb-4">Menu</div>
                        {userMenus.map((userMenu, index) => (
                            <MenuItem
                                key={`${index}-${userMenu.text}`}
                                {...userMenu}
                                isActive={
                                    userMenu.link &&
                                    route().current(userMenu.link)
                                }
                            />
                        ))}
                    </div>
                    {/* ./Menu */}

                    {/* Others */}
                    <div>
                        <div className="text-gray-1 side-link mb-4">Others</div>
                        {userOthers.map((userOther, index) => (
                            <MenuItem
                                key={`${index}-${userOther.text}`}
                                {...userOther}
                                isActive={
                                    userOther.link &&
                                    route().current(userOther.link)
                                }
                            />
                        ))}
                    </div>
                    {/* ./Others */}

                    {auth.activePlan && (
                        <SubscriptionDetail
                            name={auth.activePlan.name}
                            isPremium={auth.activePlan.name === "Premium"}
                            remainingActiveDays={
                                auth.activePlan.remainingActiveDays
                            }
                            activeDays={auth.activePlan.activeDays}
                        />
                    )}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;

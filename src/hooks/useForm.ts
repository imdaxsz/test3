import { useEffect, useState } from "react";

export default function useForm<T extends { addressInfo?: Address }>(
  initialState: T,
) {
  const [form, setForm] = useState(initialState);

  const [phone, setPhone] = useState({
    first: "010",
    second: "",
    third: "",
  });

  useEffect(() => {
    // 유저정보 가져오기
    const user = {
      name: "홍길동",
      phone: "010-0000-0000",
    };
    setForm((prev) => ({ ...prev, name: user.name }));
    const phonePart = user.phone.split("-");
    setPhone({
      first: phonePart[0] || "",
      second: phonePart[1] || "",
      third: phonePart[2] || "",
    });
  }, []);

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      phoneNumber: `${phone.first}-${phone.second}-${phone.third}`,
    }));
  }, [phone]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    part?: PHONEPART,
  ) => {
    const { id, value } = e.target;

    if (part && part in phone) {
      const numberVal = value.replace(/[^0-9]/g, "");
      setPhone((prev) => ({ ...prev, [part]: numberVal }));
    } else if (id === "addressDetail") {
      setForm((prev) => ({
        ...prev,
        addressInfo: { ...prev.addressInfo, addressDetail: value },
      }));
    } else {
      setForm((prev) => ({ ...prev, [id]: value }));
    }
  };

  const updateForm = (updates: Partial<T>) => {
    setForm((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  return {
    form,
    phone,
    handleInputChange,
    updateForm,
  };
}

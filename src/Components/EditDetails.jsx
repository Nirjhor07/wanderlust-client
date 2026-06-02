"use client";
import { handleEditDestination } from "@/lib/actions";
import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  TextField,
  Select,
  ListBox,
  TextArea,
} from "@heroui/react";

const EditDetails = ({ details }) => {
  const {
    country,
    category,
    priceUSD,
    duration,
    departureDate,
    imageURL,
    description,
    imageUrl,
    price,
    _id,
  } = details;

  return (
    <Modal>
      <Button variant="secondary">Edit Destination</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit Destination</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <form
                onSubmit={(e) => handleEditDestination(e, _id)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Destination Name */}
                  <div className="md:col-span-2">
                    <TextField
                      name="destinationName"
                      defaultValue={country}
                      isRequired
                    >
                      <Label>Destination Name</Label>
                      <Input
                        placeholder="Bali Paradise"
                        className="rounded-lg"
                      />
                      <FieldError />
                    </TextField>
                  </div>

                  {/* Country */}
                  <TextField name="country" defaultValue={country} isRequired>
                    <Label>Country</Label>
                    <Input placeholder="Indonesia" className="rounded-lg" />
                    <FieldError />
                  </TextField>

                  {/* Category - Updated Select Component */}
                  <div>
                    <Select
                      defaultValue={category}
                      name="category"
                      isRequired
                      className="w-full"
                      placeholder="Select category"
                    >
                      <Label>Category</Label>
                      <Select.Trigger className="rounded-lg">
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="Beach" textValue="Beach">
                            Beach
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Mountain" textValue="Mountain">
                            Mountain
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="City" textValue="City">
                            City
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Adventure" textValue="Adventure">
                            Adventure
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Cultural" textValue="Cultural">
                            Cultural
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Luxury" textValue="Luxury">
                            Luxury
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>

                  {/* Price */}
                  <TextField
                    defaultValue={price || priceUSD}
                    name="price"
                    type="number"
                    isRequired
                  >
                    <Label>Price (USD)</Label>
                    <Input
                      type="number"
                      placeholder="1299"
                      className="rounded-lg"
                    />
                    <FieldError />
                  </TextField>

                  {/* Duration */}
                  <TextField name="duration" defaultValue={duration} isRequired>
                    <Label>Duration</Label>
                    <Input
                      placeholder="7 Days / 6 Nights"
                      className="rounded-lg"
                    />
                    <FieldError />
                  </TextField>

                  {/* Departure Date */}
                  <div className="md:col-span-2">
                    <TextField
                      defaultValue={departureDate}
                      name="departureDate"
                      type="date"
                      isRequired
                    >
                      <Label>Departure Date</Label>
                      <Input type="date" className="rounded-lg" />
                      <FieldError />
                    </TextField>
                  </div>

                  {/* Image URL - Removed preview */}
                  <div className="md:col-span-2">
                    <TextField
                      defaultValue={imageURL || imageUrl}
                      name="imageUrl"
                      isRequired
                    >
                      <Label>Image URL</Label>
                      <Input
                        type="url"
                        placeholder="https://example.com/bali-paradise.jpg"
                        className="rounded-lg"
                      />
                      <FieldError />
                    </TextField>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-2">
                    <TextField
                      defaultValue={description}
                      name="description"
                      isRequired
                    >
                      <Label>Description</Label>
                      <TextArea
                        placeholder="Describe the travel experience..."
                        className="rounded-lg"
                      />
                      <FieldError />
                    </TextField>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    type="submit"
                    color="primary"
                    className="flex-1 rounded-lg font-semibold"
                  >
                    Save Changes
                  </Button>
                </div>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditDetails;
